"use client"
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import SheetContentMenu from './sheet-content'
import {useContext} from 'react';
import { ContextSmartBuy } from '@/app/context/smart-buy-context'
const Navbar = () => {
    const  {cartSmartBuy} = useContext(ContextSmartBuy)
  return (
    <div className='w-[94%] mx-auto min-h-10 flex items-center justify-end px-5 my-2'>
      <Sheet>
        <SheetTrigger asChild>
            <button className='relative bg-green-600 p-3 rounded-lg hover:scale-105'>
                <BsCart4 className='text-3xl text-neutral-200'/>
            </button>
        </SheetTrigger>
        <SheetContentMenu/>
      </Sheet>
    </div>
  )
}

export default Navbar
