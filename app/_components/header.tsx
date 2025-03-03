
"use client"
import React from 'react'
import LogoComponent from './logo-component'
import ManagerMenu from './manager-menu'
import Navbar from './navbar'
import useMenuManager from '../hooks/useMenuManager'

const Header = () => {
  const menu = useMenuManager();
  
  return (
    <header className='w-full h-[70px] flex  items-center justify-between'>
      
    <LogoComponent/>
      <ManagerMenu {...menu}/>
      <Navbar {...menu}/>
    </header>
  )
}

export default Header
