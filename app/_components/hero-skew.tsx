import Image from 'next/image';
import React from 'react';
import imgBoraPouper from '@/app/assets/images/bora-poupar-app.png';

const HeroSkew = () => {
  return (
    <div className="flex h-[150px] lg:h-[250px]">
      <div className="flex h-full w-[50%] -skew-x-12 items-center justify-center bg-neutral-900">
        <div>
          <h2 className="lg:text-3xl">
            <span className="font-oxygen font-thin">Oficina</span>
            <span className="font-montserrat text-custom-secondary font-bold">
              Web
            </span>
          </h2>
          <p className="font-montserrat -mt-1 text-xs font-medium text-neutral-300">
            Para seu Dia a Dia
          </p>
        </div>
      </div>
      <div className="-ml-5 h-full w-[50%] overflow-hidden rounded-lg">
        <Image
          src={imgBoraPouper}
          alt="Mulher com celular fazendo compra"
          className="-mt-4 lg:-mt-8 lg:h-[400px]"
        />
      </div>
    </div>
  );
};

export default HeroSkew;
