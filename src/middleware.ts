import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Make the "/" route accessible to both signed-in and signed-out users.
});

export const config = {
  matcher: ["/send-help(.*)", "/need-help(.*)", "/"],
};
