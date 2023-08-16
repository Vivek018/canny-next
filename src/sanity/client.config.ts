import { createClient } from "next-sanity";
import { cache } from "react";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PID!,
  dataset: "production",
  apiVersion: "2023-07-11",
  useCdn: true,
};

const client = createClient(config);
export const cachedClient = cache(client.fetch.bind(client));
