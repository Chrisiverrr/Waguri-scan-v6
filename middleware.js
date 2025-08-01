// Auth middleware placeholder
export function middleware(req) {
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith("/admin")) {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      url.pathname = "/login";
      return Response.redirect(url);
    }
  }
}
