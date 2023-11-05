import { env } from "@/env.mjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";

import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import { db } from "@/server/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          image: profile.picture,
          email: profile.email,
          name: profile.name,
          // createdAt: new Date(),
          emailVerified: profile.email_verified,
        };
      },
    }),
  ],
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
