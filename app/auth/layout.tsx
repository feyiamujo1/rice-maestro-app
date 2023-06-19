import Image from 'next/image'

export const metadata = {
  title: 'Upland Rice Maestro',
  description: 'The rice farmer"s best companion. We provide every information you need to ensure a great harvest. ',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
                    children
                }
                </div>
            </div>
        </div>
    </div>
  )
}
