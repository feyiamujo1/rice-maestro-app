import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2023-06-13",
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === "production",
});

export default client;
