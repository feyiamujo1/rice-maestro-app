export const metadata = {
  title: "Admin | Upland Rice Maestro",
  description:
    'The rice farmer"s best companion. We provide every information you need to ensure a great harvest. ',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
