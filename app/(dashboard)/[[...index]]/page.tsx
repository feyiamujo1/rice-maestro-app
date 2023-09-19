import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { authOptions } from "~/lib/auth";
import { paramToPath } from "~/lib/utils";
import {
  getOtherInfo,
  getPostHarvestingInfo,
  getPostPlantingInfo,
  getPreplantingInfo,
  getSection
} from "~/sanity/sanity-utils";

type Props = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const PrePlantingRoutes = [
  "site-selection",
  "land-preparation",
  "seedling-information",
  "seed-treatment",
  "planting-information"
];

const PostPlantingRoutes = [
  "fertilizer-information",
  "weeding-information",
  "pest-control",
  "rogueing-information",
  "harvesting-information"
];

const PostHarvestingRoutes = [
  "rice-paddy-drying",
  "parboiling-information",
  "milling-information",
  "storage-information",
  "bagging-information"
];

const OtherInformationRoutes = [
  "market-information",
  "recommended-source-for-seed",
  "recommended-source-for-fertilizer"
];

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  const path = paramToPath(params.index);

  let section;

  if (path === "/") {
    const info = await getSection("dashboard");
    section = info;
  } else if (PrePlantingRoutes.includes(path)) {
    const info = await getPreplantingInfo(path);
    section = info;
  } else if (PostPlantingRoutes.includes(path)) {
    const info = await getPostPlantingInfo(path);
    section = info;
  } else if (PostHarvestingRoutes.includes(path)) {
    const info = await getPostHarvestingInfo(path);
    section = info;
  } else if (OtherInformationRoutes.includes(path)) {
    const info = await getOtherInfo(path);
    section = info;
  }

  // const section = await getSection(path === "/" ? "dashboard" : path);

  return {
    title: section?.name
  };
}

export default async function MainDashboard({
  params
}: {
  params: { index: string[] };
}) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  const path = paramToPath(params.index);
  // const section = await getSection(path === "/" ? "dashboard" : path);
  let section;

  if (path === "/") {
    const info = await getSection("dashboard");
    section = info;
  } else if (PrePlantingRoutes.includes(path)) {
    const info = await getPreplantingInfo(path);
    section = info;
  } else if (PostPlantingRoutes.includes(path)) {
    const info = await getPostPlantingInfo(path);
    section = info;
  } else if (PostHarvestingRoutes.includes(path)) {
    const info = await getPostHarvestingInfo(path);
    section = info;
  } else if (OtherInformationRoutes.includes(path)) {
    const info = await getOtherInfo(path);
    section = info;
  }

  if (!section) {
    notFound();
  }

  return (
    <div className="prose">
      <PortableText value={section?.content} />
    </div>
  );
}
