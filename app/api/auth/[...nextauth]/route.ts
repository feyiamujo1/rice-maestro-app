import NextAuth from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";

import client from "~/lib/sanity";

const handler = NextAuth({
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
