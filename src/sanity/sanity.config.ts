import { schemas } from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export const config = defineConfig({
  name: "default",
  title: "Canny Next Infotech",

  projectId: process.env.NEXT_PUBLIC_SANITY_PID!,
  dataset: "production",

  apiVersion: "2023-07-11",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
