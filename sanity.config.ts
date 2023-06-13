import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import { visionTool } from "@sanity/vision";

const config = defineConfig({
    projectId: 'j5dv56h1',
    dataset: "production",
    title: 'Rice Maestro Sanity Studio',
    apiVersion: "2023-06-13",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    // schema: { types: schemas }

})

export default config;