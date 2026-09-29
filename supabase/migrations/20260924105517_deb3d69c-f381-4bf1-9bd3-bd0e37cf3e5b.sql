CREATE OR REPLACE FUNCTION public.security_status()
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
DECLARE result jsonb;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;

  SELECT jsonb_build_object(
    'tables', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'name', c.relname,
        'rls_enabled', c.relrowsecurity,
        'policies', (SELECT count(*) FROM pg_policies p WHERE p.schemaname='public' AND p.tablename=c.relname),
        'open_policies', (SELECT count(*) FROM pg_policies p WHERE p.schemaname='public' AND p.tablename=c.relname AND (p.qual='true' OR p.with_check='true'))
      ) ORDER BY c.relname)
      FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace
      WHERE n.nspname='public' AND c.relkind='r'), '[]'::jsonb),
    'buckets', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'name', b.id,
        'public', b.public,
        'policies', (SELECT count(*) FROM pg_policies p WHERE p.schemaname='storage' AND p.tablename='objects' AND (p.qual ILIKE '%'||b.id||'%' OR p.with_check ILIKE '%'||b.id||'%'))
      ) ORDER BY b.id) FROM storage.buckets b), '[]'::jsonb),
    'leads', jsonb_build_object(
      'client_write_policies', (SELECT count(*) FROM pg_policies p WHERE p.schemaname='public' AND p.tablename='leads' AND p.cmd IN ('INSERT','UPDATE','DELETE','ALL') AND (p.roles && ARRAY['anon','authenticated','public']::name[])),
      'client_write_grants', (SELECT count(*) FROM information_schema.role_table_grants g WHERE g.table_schema='public' AND g.table_name='leads' AND g.grantee IN ('anon','authenticated','PUBLIC') AND g.privilege_type IN ('INSERT','UPDATE','DELETE')),
      'total_30d', (SELECT count(*) FROM public.leads WHERE created_at > now() - interval '30 days'),
      'hubspot_failed_30d', (SELECT count(*) FROM public.leads WHERE created_at > now() - interval '30 days' AND NOT hubspot_synced),
      'last_insert', (SELECT max(created_at) FROM public.leads)
    ),
    'checked_at', now()
  ) INTO result;
  RETURN result;
END;
$$;
REVOKE ALL ON FUNCTION public.security_status() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.security_status() TO authenticated;