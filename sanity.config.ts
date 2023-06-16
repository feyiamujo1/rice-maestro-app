import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
  dataset: "production",
  title: "Rice Maestro Sanity Studio",
  apiVersion: "2023-06-14",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  // schema: { types: schemas }
});

export default config;
