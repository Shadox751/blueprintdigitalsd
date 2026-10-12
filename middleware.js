// Serve the jbflooring/ folder at the root of JB's own domain.
// Runs before the filesystem lookup, so the agency's root index.html can't win.
export default function middleware(request) {
  const url = new URL(request.url);
  if (url.hostname !== 'jbflooringandepoxy.com') return;
  if (url.pathname.startsWith('/jbflooring/')) return;
  url.pathname = '/jbflooring' + url.pathname;
  return new Response(null, { headers: { 'x-middleware-rewrite': url.toString() } });
}
