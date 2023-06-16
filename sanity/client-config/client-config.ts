import process from "process";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2023-06-13",
};

export default config;
