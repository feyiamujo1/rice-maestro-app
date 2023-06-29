import { groq } from "next-sanity";

import { Section } from "~/types/Section";
import client from "~/lib/sanity";

export async function getSection(slug: string): Promise<Section> {
  return await client.fetch(
    groq`*[_type == "section" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name, 
      "slug": slug.current,
      content
    }`,
    { slug: slug }
  );
}
