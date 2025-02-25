import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImage from '../assets/images/icon.png';
const LogoComponent = () => {
  return (
      <Link href=''>
    <div className='bg-white w-[90px] h-[30px] relative flex ml-4 items-center  justify-center rounded-xl'>
       <Image src={logoImage} alt='logo Metrics' className='w-full '/>
   </div>
    <h1 className='text-[9px] text-center mt-1 ml-4 font-bold'>Smart Metrics Tools</h1>
    </Link>
  )
}

export default LogoComponent
