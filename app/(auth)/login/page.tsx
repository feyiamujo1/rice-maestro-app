import Link from "next/link";

import LoginForm from "~/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="mb-10 space-y-4 md:mb-0">
      <p className="text-center text-xl font-semibold md:text-2xl">
        Log in to your account
      </p>
      <LoginForm />
      <div>
        <p className="text-center">
          Do not have an account yet?{" "}
          <Link
            href="/register"
            className="cursor-pointer font-semibold text-[#2c963f] hover:text-[#59b26a]"
          >
            Register
          </Link>
        </p>
        <p className="text-center">
          <Link
            href="/forgot-password"
            className="cursor-pointer font-semibold text-[#2c963f] hover:text-[#59b26a]"
          >
            Forgot your Password?
          </Link>
        </p>
      </div>
    </div>
  );
}
