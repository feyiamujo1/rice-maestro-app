import { signUpHandler } from "next-auth-sanity";

import config from "~/lib/sanity";

export const POST = signUpHandler(config);
