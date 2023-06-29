import { PortableText } from "@portabletext/react";
import { getSection } from "~/sanity/sanity-utils";

export const metadata = {
  title: "Dashboard | Upland Rice Maestro",
  description:
    'The rice farmer"s best companion. We provide every information you need to ensure a great harvest. ',
};

export default async function MainDashboard() {
  const section = await getSection("dashboard");

  return (
    <div className="prose">
      <PortableText value={section?.content} />
    </div>
  );
}
