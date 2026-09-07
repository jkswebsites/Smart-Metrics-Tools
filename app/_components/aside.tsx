import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import imgGuiaOnline from '@/app/assets/images/aside/guia-online-emprego.png';

const Aside = () => {
  return (
    <aside className="mx-auto flex h-[150px] w-full overflow-hidden rounded-lg lg:mt-14 lg:h-[500px] lg:w-[300px] lg:flex-col-reverse">
      <div className="relative z-20 flex h-full w-4/6 -skew-x-12 flex-col justify-center bg-neutral-900 pl-2 lg:w-full lg:skew-x-0 lg:pl-0">
        <h6 className="flex flex-col text-center">
          <span className="font-montserrat text-lg font-bold text-neutral-100">
            GuiaOnline
          </span>
          <span className="font-oxygen -mt-2 font-bold italic text-neutral-600">
            de Empregos
          </span>
        </h6>
        <Link
          href={'https://guia-online-de-empregos.vercel.app/'}
          target="_blank"
          className="bg-custom-secondary mx-auto mt-3 block w-4/5 rounded-md py-1 text-center text-xs text-neutral-800"
        >
          Acesse o site!
        </Link>
      </div>
      <div className="relative z-10 -ml-6 h-full w-4/6 lg:ml-0 lg:w-full">
        <div className="absolute h-full w-full lg:bg-gradient-to-b lg:from-transparent lg:to-neutral-900"></div>
        <Image
          src={imgGuiaOnline}
          alt="Guia Online de Emprego"
          className="h-full"
          width={0}
          height={0}
        />
      </div>
    </aside>
  );
};

export default Aside;
