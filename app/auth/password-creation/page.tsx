import Link from "next/link"
import ChangePasswordForm from "~/components/ChangePasswordForm"

export default function page() {
  return (
    <div className='space-y-4 mb-10 md:mb-0'>
        <p className='text-xl md:text-2xl font-semibold text-center'>Create new password</p>
        <ChangePasswordForm />
        <div>
            <p className='text-center'>Already have an account? <Link className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' href="/auth" >Login</Link></p>
            <p className='text-center'>Do not have an account yet? <Link className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' href="/auth/register" >Register</Link></p>
        </div>
    </div>
  )
}
