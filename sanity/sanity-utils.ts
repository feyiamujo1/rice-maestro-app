import { createClient, groq } from "next-sanity";

import { Section } from "~/types/Section";

export async function getSection(slug: string): Promise<Section> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
    dataset: "production",
    apiVersion: "2023-06-14",
  });

  return client.fetch(
    groq`*[_type == "section" && slug.current == $slug][0]
        {
            _id,
            _createdAt,
            name, 
            "slug": slug.current,
            content
        }`,
    { slug: slug }
  );
}
