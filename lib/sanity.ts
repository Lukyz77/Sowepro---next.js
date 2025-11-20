import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "fr9isu59",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: false,
});
