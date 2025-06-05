'use client';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import React, { useContext } from 'react';
import { AiOutlineClear } from 'react-icons/ai';

const ButtonResetAll = () => {
  const { resetAll } = useContext(BoraPouparContext);
  return (
    <button
      onClick={() => resetAll()}
      className="text-emerald-400 hover:scale-110"
    >
      <div className="rounded-lg bg-neutral-800 p-2">
        <AiOutlineClear className="mx-auto text-2xl" />
      </div>
      <p>reset</p>
    </button>
  );
};

export default ButtonResetAll;
