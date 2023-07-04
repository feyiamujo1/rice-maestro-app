import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";

import client from "./sanity";

export const authOptions: NextAuthOptions = {
  providers: [SanityCredentials(client)],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/signin",
  },
};
