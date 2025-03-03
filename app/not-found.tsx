import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { PiGlobeSimpleXBold } from 'react-icons/pi'


const NotFound = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center'>
            <PiGlobeSimpleXBold className='text-9xl text-red-500'/>
            <p>Error 404 - Not Found</p>
            <Link href="/" className='bg-yellow-500 flex items-center justify-center gap-x-2 text-neutral-900 py-2 px-4 mt-4 rounded-lg'>
                <FaArrowLeft />
                Voltar
            </Link>
        </div>
    </div>
  )
}

export default NotFound
