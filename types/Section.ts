import { PortableTextBlock } from "sanity";

export type Section = {
  _id: String;
  _createdAt: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
};
