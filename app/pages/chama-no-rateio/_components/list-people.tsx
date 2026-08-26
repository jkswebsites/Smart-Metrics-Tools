'use client';
import React, { useContext } from 'react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa6';
import { ChamaNoRateioContext } from '@/app/context/chamaNoRateioContext';

const ListPeople = () => {
  const { participants } = useContext(ChamaNoRateioContext);

  return (
    <div className="mx-auto mb-3 h-[250px] w-[98%] overflow-auto rounded-lg border border-neutral-800 bg-neutral-900 p-1">
      {participants && participants.length > 0 && (
        <ul className="space-y-1">
          {participants.map((participant) => (
            <li
              key={participant.id}
              className="h-12 w-full rounded-md border border-neutral-700 bg-neutral-900 px-2 pb-1 pt-1"
            >
              <div className="flex justify-between">
                <p className="font-montserrat font-bold tracking-wide text-emerald-500">
                  {participant.nickname}
                </p>
                <div className="flex gap-1 [&>button]:rounded-md [&>button]:p-1">
                  <button className="bg-red-600" title="Remover do Rateio">
                    <AiOutlineUserDelete />
                  </button>
                  <button className="bg-emerald-500" title="Pagou!">
                    <FaUserCheck />
                  </button>
                </div>
              </div>
              <div>
                {participant.payment ? (
                  <span className="font-oxygen flex items-center gap-1 text-xs">
                    <VscDebugBreakpointLog className="text-green-500" />
                    pagou!
                  </span>
                ) : (
                  <span className="font-oxygen flex items-center gap-1 text-xs">
                    <VscDebugBreakpointLog className="text-red-500" />
                    Não pagou ainda!
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPeople;
