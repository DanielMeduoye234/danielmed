// sanity/lib/client.js
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../env"; // adjust path if your env is elsewhere

export const client = createClient({
  projectId: projectId || "b3b7h4a5",
  dataset: dataset || "production",
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
