import NextAuth, { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";

import client from "~/lib/sanity";

export const handler: NextAuthOptions = NextAuth({
  providers: [SanityCredentials(client)],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
  secret: "process.env.NEXTAUTH_SECRET",
  debug: true,
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
