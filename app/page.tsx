"use client"
import Image from 'next/image'
import { useState } from 'react';

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
      <div>
        
      </div>
  </div>
  )
}
