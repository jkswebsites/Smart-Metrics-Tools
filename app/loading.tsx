import React from 'react'
import { FiRefreshCcw } from 'react-icons/fi'

const LoadingPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <FiRefreshCcw className='text-yellow-500 text-5xl animate-spin'/>
          <p>Carregando...</p>
        </div>
    </div>
  )
}

export default LoadingPage
