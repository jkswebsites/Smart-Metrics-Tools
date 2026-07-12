import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { PiGlobeSimpleXBold } from 'react-icons/pi';

const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <PiGlobeSimpleXBold className="text-9xl text-red-500" />
        <p>Error 404 - Not Found</p>
        <Link
          href="/"
          className="mt-4 flex items-center justify-center gap-x-2 rounded-lg bg-yellow-500 px-4 py-2 text-neutral-900"
        >
          <FaArrowLeft />
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
