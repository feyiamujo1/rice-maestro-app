import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getSection } from "~/sanity/sanity-utils";

import { paramToPath } from "~/lib/utils";

type Props = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const path = paramToPath(params.index);

  const section = await getSection(path === "/" ? "dashboard" : path);

  return {
    title: section?.name,
  };
}

export default async function MainDashboard({
  params,
}: {
  params: { index: string[] };
}) {
  const path = paramToPath(params.index);
  const section = await getSection(path === "/" ? "dashboard" : path);

  if (!section) {
    notFound();
  }

  return (
    <div className="prose">
      <PortableText value={section?.content} />
    </div>
  );
}
