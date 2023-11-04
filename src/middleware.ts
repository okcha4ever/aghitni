import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/need-help"],
  // ignoredRoutes: [/^\/api\/users\/signed-in(.*)/], // Use a regular expression
});

export const config = {
  matcher: ["/send-help"],
};
