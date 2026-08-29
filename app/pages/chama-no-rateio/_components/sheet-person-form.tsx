'use client';
import { ChamaNoRateioContext } from '@/app/context/chamaNoRateioContext';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';
import { LiaUserPlusSolid } from 'react-icons/lia';
import { TbLoader } from 'react-icons/tb';

import { tv } from 'tailwind-variants';

const labelStyles = tv({
  base: 'absolute top-[3px]  transition-all duration-500 ease-in-out',
  variants: {
    focus: {
      off: 'left-6 top-[3px] text-xs',
      on: 'text-[7px] left-1 -top-4 italic text-custom-secondary',
    },
  },
  defaultVariants: {
    focus: 'off',
  },
});
export interface IInputParticipant {
  nickname: string;
}
const SheetPersonForm = () => {
  const { addParticipant } = useContext(ChamaNoRateioContext);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<IInputParticipant>();
  const [fieldFocus, setFieldFocus] = useState<boolean>(false);
  const handleFocus = () => {
    setFieldFocus(true);
  };
  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const input = target.value;

    if (input.length === 0) {
      setFieldFocus(false);
    }
  };
  const handleSubmitForm = (data: IInputParticipant) => {
    addParticipant(data);
    resetField('nickname');
  };

  return (
    <form className="px-1" onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="nickname" className="top relative">
        <span
          className={labelStyles({
            focus: fieldFocus ? 'on' : 'off',
          })}
        >
          Nome do participante:
        </span>
        <FaRegUserCircle
          className={`${fieldFocus ? 'text-emerald-500' : 'text-neutral-400'} absolute left-1 top-1`}
        />
        <input
          {...register('nickname', { required: true })}
          type="text"
          className="w-full rounded-sm border border-neutral-600 bg-neutral-800 py-1 pl-6 tracking-wider outline-none transition-all delay-300 ease-in-out focus:border-emerald-500 focus:bg-neutral-700"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {errors.nickname?.type === 'required' && (
          <p className="font-oxygen mt-1 pl-1 text-[10px] italic text-red-600">
            Este campo é obrigatório!
          </p>
        )}
      </label>
      <div>
        <button
          type="submit"
          className="font-montserrat mt-3 flex w-full items-center justify-center rounded-sm bg-emerald-500 py-1 text-xs text-neutral-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-1">
              <TbLoader />
              Carregando...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <LiaUserPlusSolid />
              Adicionar
            </span>
          )}
        </button>
        {isSubmitSuccessful && (
          <p className="font-oxygen mt-2 text-center text-xs text-emerald-400">
            Participante adicionado à lista!
          </p>
        )}
      </div>
    </form>
  );
};

export default SheetPersonForm;
