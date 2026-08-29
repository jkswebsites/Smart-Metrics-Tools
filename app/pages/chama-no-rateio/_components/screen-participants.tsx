'use client';
import { ChamaNoRateioContext } from '@/app/context/chamaNoRateioContext';
import React, { useContext } from 'react';
import { FaUsers } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';

const ScreenParticipants = () => {
  const { participants } = useContext(ChamaNoRateioContext);
  const totalParticipants = participants ? participants.length : 1;
  const TotalPayment = participants
    ? participants.filter((participant) => participant.payment === true).length
    : 0;
  return (
    <div className="mb-3 h-[50px] w-full space-y-1">
      <div className="flex h-[25px] items-center justify-between rounded-lg border border-emerald-500 bg-neutral-800 px-1">
        <p className="m-0 block p-0 text-[10px] font-bold text-emerald-500">
          Participantes:{' '}
        </p>
        <div>
          <p className="m-0 flex items-center gap-2 font-mono text-lg font-bold">
            <span className="text-emerald-400">{totalParticipants}</span>
            <FaUsers />
          </p>
        </div>
      </div>
      <div className="flex h-[25px] items-center justify-between rounded-lg border border-emerald-500 bg-neutral-800 px-1">
        <p className="m-0 block p-0 text-[10px] font-bold text-emerald-500">
          Pagantes:{' '}
        </p>
        <div>
          <p className="m-0 flex items-center gap-2 font-mono text-lg font-bold">
            <div>
              <span className="text-emerald-400">{TotalPayment}</span>
              <span>/</span>
              <span className="text-neutral-100">{totalParticipants}</span>
            </div>
            <GiMoneyStack />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreenParticipants;
