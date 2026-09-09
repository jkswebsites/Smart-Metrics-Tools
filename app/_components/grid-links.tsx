import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { apps } from '../constants/apps-list';

const GridLinks = () => {
  return (
    <div className="flex w-[520px] gap-3 py-3 pl-4 lg:w-[700px]">
      {apps.map((app, index) => (
        <div
          key={index}
          className="h-[300px] w-44 overflow-hidden rounded-lg bg-neutral-900 shadow-sm shadow-neutral-500 lg:w-52"
        >
          <div className="relative h-[200px] w-full overflow-hidden">
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-neutral-900 to-100%"></div>
            <Image src={app.image} alt="Bora Poupar App" className="h-full" />
          </div>
          <div className="h-[100px] w-full">
            <h2 className="text-center text-emerald-400">
              <span className="font-oxygen">{app.fistWordTitle}</span>
              {app.preposition && (
                <span className="font-montserrat text-[8px] font-thin italic text-neutral-100">
                  {app.preposition}
                </span>
              )}
              <span className="font-bold text-white">
                {app.secondWordTitle}
              </span>
            </h2>
            <p className="font-oxygen -mt-1 text-center text-[9px] text-neutral-400">
              {app.description}
            </p>

            <Link
              href={app.link}
              className="bg-custom-secondary font-montserrat mx-auto mt-3 block w-4/5 rounded-md py-1 text-center text-xs text-neutral-900"
            >
              Confirar
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridLinks;
