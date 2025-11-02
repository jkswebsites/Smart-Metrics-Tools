import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ImageCard {
  children: ReactNode;
}

export const TitleContent = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-fit">
      <h1>
        <span className="text-2xl text-neutral-400">{title}</span>
        <span className="text-2xl font-bold text-emerald-400">{subtitle}</span>
      </h1>
    </div>
  );
};
export const ImageContent = ({ path }: { path: string }) => {
  return (
    <Image
      src={path}
      alt="vaca segurando dinheiro bora poupar"
      width={0}
      height={0}
      sizes="full"
      className="h-[100px] w-[100px] rounded-full border-2 border-emerald-400 p-1"
    />
  );
};
export const ImageCard = ({ children }: ImageCard) => {
  return (
    <div className="mx-auto my-6 flex w-4/5 flex-col items-center justify-center gap-x-2 sm:max-w-[400px]">
      {children}
    </div>
  );
};
