'use client';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaSquarePlus } from 'react-icons/fa6';
interface IFormTotal {
  valueTotal: number;
}

const FormAddValueInitial = () => {
  const { addValueTotal } = useContext(BoraPouparContext);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<IFormTotal>();
  const onSubmit: SubmitHandler<IFormTotal> = (data) => {
    addValueTotal(data.valueTotal);
    resetField('valueTotal');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-4 flex w-[95%] items-center rounded-sm border border-neutral-800 bg-neutral-900 p-4 shadow-sm shadow-neutral-700"
    >
      <label>
        <div>
          <span className="text-sm font-bold italic tracking-wider text-neutral-300">
            Valor para gastar:
          </span>
          <input
            {...register('valueTotal', {
              required: true,
              setValueAs: (value: string) => Number(value),
            })}
            type="number"
            step={'0.01'}
            inputMode="numeric"
            className={`w-4/5 rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-5 text-center text-2xl font-bold tracking-wider text-neutral-100 outline-none focus:border-neutral-500`}
            placeholder="R$:1.000,00"
          />
          <span className="relative -top-5 left-2 inline-block">*</span>
        </div>
        {errors.valueTotal?.type === 'required' && (
          <p className="ml-2 mt-1 text-xs tracking-wider text-red-600">
            Esse campo é obrigatório!
          </p>
        )}
      </label>
      <Button
        disabled={isSubmitting}
        variant={'ghost'}
        title="adicionar valor"
        className="relative right-2 top-2 bg-emerald-400 text-neutral-950"
      >
        <FaSquarePlus />
      </Button>
    </form>
  );
};

export default FormAddValueInitial;
