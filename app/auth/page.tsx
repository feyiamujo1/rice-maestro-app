import Link from "next/link";
import LoginForm from "~/components/LoginForm";

export default function LoginPage() {
  return (
    <div className='space-y-4 mb-10 md:mb-0'>
        <p className='text-xl md:text-2xl font-semibold text-center'>Log in to your account</p>
        <LoginForm />
        <div>
            <p className='text-center'>Do not have an account yet? <Link href="/auth/register" className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]'>Register</Link></p>
            <p className="text-center"><Link href="/auth/forgot-password" className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]'>Forgot your Password?</Link></p>
        </div>
    </div>
  )
}
