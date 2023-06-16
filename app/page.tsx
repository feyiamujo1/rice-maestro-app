import Image from "next/image";

import LoginForm from "~/components/LoginForm";

export default function Home() {
  return (
    <div className="relative m-0 w-full p-0">
      <nav className="absolute inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md">
        <div className="mx-auto w-11/12">
          <div className="flex items-center gap-0.5">
            <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            />
            <p className="flex flex-col -space-y-1 text-[#2c963f]">
              <span>Rice</span>
              <span>Meastro</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="mx-auto flex h-screen min-h-screen w-full flex-row">
        <div className="flex w-[950px] items-end bg-login-image bg-cover bg-[60%] py-10">
          <div className="mx-auto w-10/12 space-y-6 text-white">
            <div>
              <h1 className=" text-2xl font-semibold text-[#eabc62]">
                Rice Farmer&apos;s Guide
              </h1>
              <p>
                Explore our guides using our advisory tools and training
                materials and unlock the full potential of your rice farming
                journey!
              </p>
            </div>
            <ol className=" list-disc space-y-3">
              <li className="ml-4">
                Best practices for farmers from crop pre-planting to
                post-planting phase.
              </li>
              <li className="ml-4">
                Fertilizer scheduling, preventive and control measures for
                sustainable pest and disease management.
              </li>
              {/* <li className='ml-4'>
                   based on crop stage, soil analysis, and nutrient deficiencies.
                </li> */}
            </ol>
            <div className="flex w-full justify-end">
              <p>Sign up now!</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="mx-auto mt-10 w-[400px] space-y-3">
            <p className="text-2xl font-semibold">Log in to your account</p>
            <LoginForm />
            <p className="text-center">
              Do not have an account yet?{" "}
              <span className="cursor-pointer font-semibold text-[#2c963f] hover:text-[#59b26a]">
                Register
              </span>
            </p>
            <p className="cursor-pointer text-center font-semibold text-[#2c963f] hover:text-[#59b26a]">
              Forgot your Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
