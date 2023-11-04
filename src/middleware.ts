import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  // publicRoutes: ["/", "/need-help"],
  // ignoredRoutes: ["/api/users/signed-in(.*)"],
});

export const config = {
  matcher: ["/"],
};
