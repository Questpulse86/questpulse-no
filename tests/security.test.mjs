import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { applyResponsePolicy } from '../src/lib/response-policy.ts';
import { leadSchema } from '../src/lib/site-schemas.ts';

function response(path = '/', requestInit = {}, responseInit = {}, host = 'questpulse.no') {
  return applyResponsePolicy(new Request(`https://${host}${path}`, requestInit), new Response('test', responseInit));
}

test('anonymous public pages can be shared; unknown routes cannot', () => {
  assert.match(response().headers.get('Vercel-CDN-Cache-Control'), /s-maxage=60/);
  assert.equal(response('/new-private-page').headers.get('Vercel-CDN-Cache-Control'), 'no-store');
});

test('sessions, credentials and cookies never enter shared caches', () => {
  for (const headers of [{ Cookie: 'session=test' }, { Authorization: 'Bearer test' }]) {
    assert.equal(response('/', { headers }).headers.get('Vercel-CDN-Cache-Control'), 'no-store');
  }
  assert.equal(response('/', {}, { headers: { 'Set-Cookie': 'session=test' } }).headers.get('Vercel-CDN-Cache-Control'), 'no-store');
});

test('upstream privacy and visitor-specific variants are respected', () => {
  for (const headers of [
    { 'Cache-Control': 'private, max-age=60' }, { 'Cache-Control': 'no-store' },
    { 'CDN-Cache-Control': 'no-store' }, { 'Vercel-CDN-Cache-Control': 'private' },
    { Vary: 'Cookie' }, { Vary: 'Authorization' }, { Vary: '*' },
  ]) assert.equal(response('/', {}, { headers }).headers.get('Vercel-CDN-Cache-Control'), 'no-store');
  assert.match(response('/', {}, { headers: { Vary: 'Accept-Encoding' } }).headers.get('Vercel-CDN-Cache-Control'), /s-maxage=60/);
});

test('private endpoints, mutations and errors are not cacheable', () => {
  for (const path of ['/admin', '/admin/', '/auth', '/demo', '/api', '/api/mcp', '/_serverFn/test']) {
    const r = response(path);
    assert.equal(r.headers.get('Cache-Control'), 'private, no-store');
    assert.equal(r.headers.get('X-Robots-Tag'), 'noindex, nofollow');
  }
  assert.equal(response('/', { method: 'POST' }).headers.get('Vercel-CDN-Cache-Control'), 'no-store');
  for (const status of [400, 404, 500, 503]) {
    const r = response('/', {}, { status });
    assert.equal(r.status, status);
    assert.equal(r.headers.get('Vercel-CDN-Cache-Control'), 'no-store');
    assert.equal(r.headers.get('X-Robots-Tag'), 'noindex, nofollow');
  }
});

test('preview pages are noindex; production content remains indexable', () => {
  assert.equal(response('/', {}, {}, 'preview.vercel.app').headers.get('X-Robots-Tag'), 'noindex, nofollow');
  assert.equal(response().headers.get('X-Robots-Tag'), null);
  assert.equal(response('/', {}, {}, 'digitalcoachub.no').headers.get('X-Robots-Tag'), null);
});

test('security headers and existing response contents are preserved', async () => {
  const r = response();
  assert.equal(await r.text(), 'test');
  assert.equal(r.headers.get('X-Content-Type-Options'), 'nosniff');
  assert.equal(r.headers.get('Referrer-Policy'), 'strict-origin-when-cross-origin');
  assert.equal(r.headers.get('Permissions-Policy'), 'camera=(), microphone=(), geolocation=()');
});

test('lead input rejects invalid, unsupported and oversized values', () => {
  const valid = { name: 'Test Person', email: 'test@example.com', inquiryType: 'enterprise', locale: 'no' };
  assert.equal(leadSchema.safeParse(valid).success, true);
  for (const patch of [{ name: '' }, { email: 'invalid' }, { message: 'x'.repeat(4001) }, { locale: 'invalid' }]) {
    assert.equal(leadSchema.safeParse({ ...valid, ...patch }).success, false);
  }
});

test('locked dependency manifests match and Vercel security headers are present', () => {
  const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
  const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url)));
  assert.deepEqual(lock.packages[''].dependencies, manifest.dependencies);
  assert.deepEqual(lock.packages[''].devDependencies, manifest.devDependencies);
  const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url)));
  const headers = config.headers.find((entry) => entry.source === '/:path*').headers;
  assert.ok(headers.some((h) => h.key === 'Content-Security-Policy' && h.value.includes("object-src 'none'")));
});
