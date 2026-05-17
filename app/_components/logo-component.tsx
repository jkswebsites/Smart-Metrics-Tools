import Link from 'next/link';
import React from 'react';
import { GiWireframeGlobe } from 'react-icons/gi';

const LogoComponent = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center pl-6">
        <GiWireframeGlobe className="text-3xl text-white" />
        <h1 className="italic">
          <span className="font-bold text-yellow-400">Mundo</span>
          DoApps
        </h1>
      </div>
    </Link>
  );
};

export default LogoComponent;
