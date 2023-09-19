import { groq } from "next-sanity";

import { Notification } from "~/types/Notification";
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

export async function getPreplantingInfo(slug: string): Promise<Section> {
  return await client.fetch(
    groq`*[_type == "preplanting-information" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name, 
      "slug": slug.current,
      content
    }`,
    { slug: slug }
  );
}

export async function getPostPlantingInfo(slug: string): Promise<Section> {
  return await client.fetch(
    groq`*[_type == "post-planting-information" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name, 
      "slug": slug.current,
      content
    }`,
    { slug: slug }
  );
}

export async function getPostHarvestingInfo(slug: string): Promise<Section> {
  return await client.fetch(
    groq`*[_type == "post-harvesting-information" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name, 
      "slug": slug.current,
      content
    }`,
    { slug: slug }
  );
}


export async function getOtherInfo(slug: string): Promise<Section> {
  return await client.fetch(
    groq`*[_type == "other-information" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name, 
      "slug": slug.current,
      content
    }`,
    { slug: slug }
  );
}

export async function getNotification(): Promise<Notification> {
  return await client.fetch(
    groq`*[_type == "notification"]{
      _id,
      action,
      "created_at": _createdAt,
      "source": section->name,
      "slug": section->slug.current
    }`
  );
}
