import { PortableText } from "@portabletext/react";
import { getSection } from "~/sanity/sanity-utils";

type Props = {
  params: { section: string };
}

export default async function SectionPage({ params }: Props) {
  const slug = params.section;

  const section = await getSection(slug);

  return (
    <div>
      <PortableText 
        value={section?.content}
      />
    </div>
  );
}
