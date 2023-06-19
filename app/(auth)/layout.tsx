import Image from "next/image";

export const metadata = {
  title: "User Authentication | Upland Rice Maestro",
  description:
    'The rice farmer"s best companion. We provide every information you need to ensure a great harvest. ',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative m-0 w-full p-0">
      <nav className="inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md md:absolute">
        <div className="mx-auto w-11/12">
          <div className="flex items-center gap-0.5">
            <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            />
            <p className="flex flex-col -space-y-1 text-primary">
              <span>Rice</span>
              <span>Meastro</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="mx-auto flex min-h-screen w-full flex-col md:h-screen md:flex-row">
        <div className="flex w-full items-end bg-login-image bg-cover bg-[60%] py-8 md:w-[700px] md:py-10 xl:w-[950px]">
          <div className="mx-auto w-11/12 space-y-6 text-white md:w-10/12">
            <div>
              <h1 className="text-xl font-semibold text-primary md:text-2xl">
                The Rice Farmer&apos;s Guide
              </h1>
              <p className="text-sm md:text-base">
                Explore our guides using our advisory tools and training
                materials and unlock the full potential of your rice farming
                journey!
              </p>
            </div>
            <ol className="hidden list-disc space-y-3 md:block">
              <li className="ml-4">
                Best practices for farmers from crop pre-planting to
                post-planting phase.
              </li>
              <li className="ml-4">
                Fertilizer scheduling, preventive and control measures for
                sustainable pest and disease management.
              </li>
            </ol>
            <div className="hidden w-full justify-end md:flex">
              <p className=" text-primary">Sign up now!</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:overflow-y-scroll">
          <div className="mx-auto w-11/12 space-y-3 py-8 sm:w-[400px] md:mt-24 md:w-[350px] md:py-28 xl:w-[400px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
