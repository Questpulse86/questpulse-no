import { useEffect, useState } from "react";

/**
 * digitalcoachub.no serveres via rewrite fra /dchub. På det domenet er
 * undersidene tilgjengelige på rot, ellers under /dchub.
 */
export function useDchHref(path: string) {
  const [href, setHref] = useState(`/dchub${path}`);

  useEffect(() => {
    if (window.location.host.includes("digitalcoachub")) setHref(path);
  }, [path]);

  return href;
}
