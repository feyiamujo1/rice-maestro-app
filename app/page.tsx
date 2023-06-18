"use client"
import Image from 'next/image'
import { useState } from 'react';
import ConfirmVerificationCode from '~/components/ChangePasswordForm';
import ForgotPasswordForm from '~/components/ForgotPasswordForm';
import LoginForm from '~/components/LoginForm';
import SignupForm from '~/components/SignupForm';



export default function Home() {
  const [showCurrentForm, setShowCurrentForm] = useState("login");

  return (
    <div className='p-0 m-0 w-full relative'>
      <nav className='bg-white w-full md:absolute left-0 right-0 top-0 z-50 py-2 shadow-md'>
        <div className='w-11/12 mx-auto'>
          <div className='flex items-center gap-0.5'>
            <Image width={70} height={60} src="/images/wheat-14.jpg" className=' object-fill' alt='logo' />
            <p className='flex flex-col -space-y-1 text-primary'>
              <span>Rice</span>
              <span>Meastro</span>
            </p>
          </div>
        </div>
      </nav>
      <div className='flex flex-col md:flex-row w-full md:h-screen min-h-screen mx-auto'>
          <div className='w-full md:w-[700px] xl:w-[950px] bg-login-image bg-cover bg-[60%] flex items-end py-8 md:py-10' >
            <div className='w-11/12 md:w-10/12 mx-auto text-white space-y-6'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold text-primary'>The Rice Farmer's Guide</h1>
                <p className='text-sm md:text-base'>Explore our guides using our advisory tools and training materials and unlock the full potential of your rice farming journey!</p>
              </div>
              <ol className='hidden md:block space-y-3 list-disc'>
                <li className='ml-4'>
                  Best practices for farmers from crop pre-planting to post-planting phase.
                </li>
                <li className='ml-4'>
                  Fertilizer scheduling, preventive and control measures for sustainable pest and disease management.
                </li>
              </ol>
              <div className='w-full hidden md:flex justify-end'>
                <p className=' text-primary'>Sign up now!</p>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center md:overflow-y-scroll'>
            <div className='w-11/12 sm:w-[400px] md:w-[350px] xl:w-[400px] mx-auto space-y-3 py-8 md:py-28 md:mt-24' >
              {
                showCurrentForm === "login" ?
                  <div className='space-y-4 mb-10 md:mb-0'>
                    <p className='text-xl md:text-2xl font-semibold text-center'>Log in to your account</p>
                    <LoginForm />
                    <div>
                      <p className='text-center'>Do not have an account yet? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("register")}}>Register</span></p>
                      <p onClick={()=>{setShowCurrentForm("forgot_password")}} className='text-center text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]'>Forgot your Password?</p>
                    </div>
                  </div> 
                : showCurrentForm === "register" ?
                  <div className='space-y-4 mb-10 md:mb-0'>
                    <p className='text-xl md:text-2xl font-semibold text-center'>Register your account</p>
                    <SignupForm />
                    <p className='text-center'>Already have an account? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("login")}}>Login</span></p>
                  </div>
                :showCurrentForm === "forgot_password" ? 
                  <div className='space-y-4 mb-10 md:mb-0'>
                    <p className='text-xl md:text-2xl font-semibold text-center'>Forgot your password?</p>
                    <ForgotPasswordForm />
                    <div>
                      <p className='text-center'>Already have an account? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("login")}}>Login</span></p>
                      <p className='text-center'>Do not have an account yet? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("register")}}>Register</span></p>
                    </div>
                  </div>
                : showCurrentForm === "create_password" ?
                  <div className='space-y-4 mb-10 md:mb-0'>
                    <p className='text-xl md:text-2xl font-semibold text-center'>Create new password</p>
                    <ConfirmVerificationCode />
                    <div>
                      <p className='text-center'>Already have an account? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("login")}}>Login</span></p>
                      <p className='text-center'>Do not have an account yet? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("register")}}>Register</span></p>
                    </div>
                  </div>
                : showCurrentForm === "sent_verification" ?
                  <div className='space-y-4 mb-10 md:mb-0'>
                    <div className="text-center mx-auto w-fit">
                        <svg width="45" height="45" className=' fill-primary' viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </div>
                    <p className='text-xl md:text-2xl font-semibold text-center'>Password reset link sent</p>
                    <div>
                      <p className='text-center'>Check your email for the password reset link</p>
                      <p className='text-center'>Didn't receive any code? <span className='text-[#2c963f] font-semibold cursor-pointer hover:text-[#59b26a]' onClick={()=>{setShowCurrentForm("forgot_password")}}>Resend Code</span></p>
                    </div>
                  </div>
                : null
              }
            </div>
          </div>
      </div>
    </div>
  )
}
