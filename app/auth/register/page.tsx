import Link from "next/link";

import SignupForm from "~/components/SignupForm";

export default function RegistrationPage() {
  return (
    <div className="mb-10 space-y-4 md:mb-0">
      <p className="text-center text-xl font-semibold md:text-2xl">
        Register your account
      </p>
      <SignupForm />
      <p className="text-center">
        Already have an account?{" "}
        <Link
          className="cursor-pointer font-semibold text-[#2c963f] hover:text-[#59b26a]"
          href="/auth"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
