import { useEffect, useState } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { publicPerformanceUrl, sanitizePerformanceEvent } from '@/lib/performance-privacy';

function beforeSend(event: Parameters<typeof sanitizePerformanceEvent>[0]) {
  // The SDK script may outlive the component after navigation. Re-check the current page.
  if (!publicPerformanceUrl(window.location.href)) return null;
  return sanitizePerformanceEvent(event);
}

export function PublicSpeedInsights() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [production, setProduction] = useState(false);
  useEffect(() => { setProduction(publicPerformanceUrl(window.location.href) !== null); }, [path]);
  if (!production || !publicPerformanceUrl(`https://questpulse.no${path}`)) return null;
  return <SpeedInsights route={path} beforeSend={beforeSend} debug={false} />;
}
