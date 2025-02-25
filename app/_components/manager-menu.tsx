'use client'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { IoMdClose } from 'react-icons/io'

export interface ManagerMenuProps {
  handleMenuControl:() => void;
  menuIsOpen: boolean;
}

const ManagerMenu = ({handleMenuControl, menuIsOpen}:  ManagerMenuProps) => {
    
  return (
    <div className='flex flex-col items-end px-2 mx-3 mr-9 relative'>
      <div onClick={() => handleMenuControl()} className=' flex text-4xl text-center cursor-pointer md:hidden'>
        {
            !menuIsOpen ? (
                <GiHamburgerMenu className='transition-all'  />
            ) : (
                <IoMdClose />
            )
        }
      
      </div>
        
    </div>
  )
}

export default ManagerMenu
