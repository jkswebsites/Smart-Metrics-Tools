'use client';
import React from 'react';
import LogoComponent from './logo-component';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavbarMobile from './navbar-mobile';
import Navbar from './navbar';
import PWAButton from './pwa-button';

const Header = () => {
  return (
    <header className="flex h-[70px] w-full items-center justify-between pr-3">
      <LogoComponent />
      <Navbar />
      <div className="flex items-center gap-4">
        <PWAButton />
        <Sheet>
          <SheetTrigger title="Menu open" className="hover:scale-110 md:hidden">
            <GiHamburgerMenu className="text-2xl" />
          </SheetTrigger>
          <NavbarMobile />
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
