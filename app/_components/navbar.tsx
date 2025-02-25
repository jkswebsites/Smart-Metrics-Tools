"use client"
import React from 'react'
import Link from 'next/link'
import { ManagerMenuProps } from './manager-menu'
import { usePathname } from 'next/navigation'
import { MdOutlineCalculate } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";

const navLinks = [
    {name: 'Home', path: '/', icon: BsHouseFill},
    {name: 'Spent Control', path: '/pages/spent-control', icon: MdOutlineCalculate},
]

const Navbar = ({menuIsOpen, handleMenuControl}:  ManagerMenuProps) => {
    const pathname = usePathname();
    console.log(pathname);
    
  return (
    <nav className={`${menuIsOpen ? 'w-[90%] opacity-100': 'w-[0px] opacity-0'}  sm:w-4/8 overflow-hidden absolute top-[70px]  left-10  h-[90vh] smootTransition md:!w-[70%] md:!opacity-100 md:left-0 md:mr-4 md:relative md:h-[60px] md:top-0`}>
      <div className={`${menuIsOpen ? 'left-[0]':  'left-[100%]'} relative  smootTransitionMenu w-full h-full  bg-neutral-900 md:space-x-6 md:!left-0 md:flex md:w-[70%] md:bg-transparent`}>
        {
            navLinks.map((link, index) => (
                <Link href={link.path} key={index} onClick={() => handleMenuControl()} className={`${pathname === link.path ? '': ''} block text-center py-6`}>
                <span className={`${pathname === link.path && 'font-bold'} text-clip flex justify-center items-center`}>
                {pathname === link.path && <link.icon className='mr-1 text-yellow-500 '/>}
                    {link.name}
                </span>
                
                <div className={`${pathname === link.path ? 'w-[30px]': 'w-0'} mx-auto flex justify-center items-center bg-yellow-400 h-2 rounded-xl`}></div>
            </Link>
            ))
        }
      </div>
    </nav>
  )
}

export default Navbar
