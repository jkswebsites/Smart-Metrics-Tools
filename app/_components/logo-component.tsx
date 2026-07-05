import Link from 'next/link';
import React from 'react';
import { SiSaturn } from 'react-icons/si';

const LogoComponent = () => {
  return (
    <Link href="/" className="h-full w-fit">
      <div className="from-custom-secondary -ml-3 flex h-full -skew-x-[20deg] items-center justify-center bg-gradient-to-r px-5">
        <SiSaturn className="text-5xl drop-shadow-lg" />
        <div className="ml-2">
          <h1 className="font-oxygen text-2xl font-bold">Saturno</h1>
          <h3 className="font-montserrat -mt-2 text-left text-neutral-950">
            Apps
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default LogoComponent;
