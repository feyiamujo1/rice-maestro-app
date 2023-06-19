import Link from "next/link";

export default function page() {
  return (
    <div className="mb-10 space-y-4 md:mb-0">
      <div className="mx-auto w-fit text-center">
        <svg
          width="45"
          height="45"
          className=" fill-primary"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
        </svg>
      </div>
      <p className="text-center text-xl font-semibold md:text-2xl">
        Password reset link sent
      </p>
      <div>
        <p className="text-center">
          Check your email for the password reset link
        </p>
        <p className="text-center">
          Didn&apos;t receive any code?{" "}
          <Link
            href="/auth/forgot-password"
            className="cursor-pointer font-semibold text-[#2c963f] hover:text-[#59b26a]"
          >
            Resend Code
          </Link>
        </p>
      </div>
    </div>
  );
}
