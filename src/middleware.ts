import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/need-help", "/api/users/signed-in"], // Add "/api/users/signed-in" to publicRoutes
  apiRoutes: [], // Remove "/api/users/signed-in" from apiRoutes
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
