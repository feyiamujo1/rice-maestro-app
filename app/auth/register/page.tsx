import Link from "next/link"
import SignupForm from "~/components/SignupForm"

export default function RegistrationPage() {
  return (
    <div className='space-y-4 mb-10 md:mb-0'>
        <p className='text-xl md:text-2xl font-semibold text-center'>Register your account</p>
        <SignupForm />
        <p className='text-center'>Already have an account? <Link className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' href="/auth" >Login</Link></p>
    </div>
  )
}
