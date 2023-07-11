import LoginForm from "~/components/LoginForm";

export default function Home() {
  return (
    <div className="p-0 m-0 w-full relative">
      <nav className="bg-white w-full absolute left-0 right-0 top-0 z-50 py-2 shadow-md">
        <div className="w-11/12 mx-auto">
          <div className="flex items-center gap-0.5">
            {/* <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            /> */}
            <p className="flex flex-col -space-y-1 text-[#2c963f]">
              <span>Rice</span>
              <span>Maestro</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="flex flex-row w-full h-screen min-h-screen mx-auto">
        <div className="w-[950px] bg-login-image bg-cover bg-[60%] flex items-end py-10">
          <div className="w-10/12 mx-auto text-white space-y-6">
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
            <ol className=" space-y-3 list-disc">
              <li className="ml-4">
                Best practices for farmers from crop pre-planting to
                post-planting phase.
              </li>
              <li className="ml-4">
                Fertilizer scheduling, preventive and control measures for
                sustainable pest and disease management.
              </li>
            </ol>
            <div className="w-full flex justify-end">
              <p>Sign up now!</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[400px] mx-auto space-y-3 mt-10">
            <p className="text-2xl font-semibold">Log in to your account</p>
            <LoginForm />
            <p className="text-center">
              Do not have an account yet?{" "}
              <span className="text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]">
                Register
              </span>
            </p>
            <p className="text-center text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]">
              Forgot your Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
