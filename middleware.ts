export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/add",
    "/gigs",
    "/gig/:path*",
    "/mygigs",
    "/pay/:path*",
    "/success",
    "/orders",
    "/chat/:path*",
    "/messages",
  ],
};
