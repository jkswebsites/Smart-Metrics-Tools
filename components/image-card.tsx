import Image from 'next/image';
import React from 'react';

const ImageCard = () => {
  return (
    <div className="mx-auto my-6 flex w-4/5 items-center justify-center gap-x-2 sm:max-w-[400px]">
      <div>
        <h1>
          <span className="text-2xl text-neutral-400">Bora</span>
          <span className="text-2xl font-bold text-emerald-400">Poupar?</span>
        </h1>
      </div>
      <Image
        src="/vaca-bora-poupar.png"
        alt="vaca segurando dinheiro bora poupar"
        width={0}
        height={0}
        sizes="full"
        className="h-[50px] w-[50px] rounded-full border-2 border-emerald-400 p-1"
      />
    </div>
  );
};

export default ImageCard;
