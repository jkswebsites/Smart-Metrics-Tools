'use client';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaSquarePlus } from 'react-icons/fa6';
interface IFormAddCart {
  item: string;
  amount: number;
  price: number;
}

const FormAddCart = () => {
  const { addValueTotal } = useContext(BoraPouparContext);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<IFormAddCart>({ defaultValues: { amount: 1 } });
  const onSubmit: SubmitHandler<IFormAddCart> = (data) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-4 w-[95%] rounded-sm border border-neutral-800 bg-neutral-900 p-4 shadow-sm shadow-neutral-700"
    >
      <label>
        <div>
          <span className="block text-sm font-bold italic tracking-wider text-neutral-300">
            Produto
          </span>
          <input
            {...register('item', {})}
            type="text"
            inputMode="text"
            className={`w-4/5 rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-5 text-2xl font-bold tracking-wider text-neutral-100 outline-none placeholder:text-xl placeholder:italic focus:border-neutral-500`}
            placeholder="Nome do item"
          />
          <span className="relative -top-5 left-2 inline-block">*</span>
        </div>
        {errors.item?.type === 'required' && (
          <p className="ml-2 mt-1 text-xs tracking-wider text-red-600">
            Esse campo é obrigatório!
          </p>
        )}
      </label>

      <div className="mt-3 flex w-full items-center justify-between">
        <label className="w-[70%]">
          <div className="w-full">
            <span className="block text-sm font-bold italic tracking-wider text-neutral-300">
              Preço:
            </span>
            <input
              {...register('price', {
                setValueAs: (value: string) => Number(value),
              })}
              type="number"
              inputMode="numeric"
              className={`w-[80%] rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-5 text-2xl font-bold tracking-wider text-neutral-100 outline-none placeholder:text-xl placeholder:italic focus:border-neutral-500`}
              placeholder="R$:0,00"
            />
            <span className="relative -top-5 left-2 inline-block">*</span>
          </div>
          {errors.item?.type === 'required' && (
            <p className="ml-2 mt-1 text-xs tracking-wider text-red-600">
              Esse campo é obrigatório!
            </p>
          )}
        </label>

        <label className="w-[40%]">
          <div className="w-full">
            <span
              className={`${errors.amount?.message === 'required' ? 'text-red-600' : 'text-neutral-300'} block text-xs font-bold italic tracking-wider`}
            >
              Quantidade:
            </span>
            <input
              {...register('amount', {
                setValueAs: (value: string) => Number(value),
              })}
              type="number"
              inputMode="numeric"
              className={`w-[70%] rounded-md border border-neutral-700 bg-neutral-800 py-2 text-center text-2xl font-bold tracking-wider text-neutral-100 outline-none placeholder:text-xl placeholder:italic focus:border-neutral-500`}
              placeholder="0"
              min={1}
            />
            <span className="relative -top-5 left-2 inline-block">*</span>
          </div>
        </label>
      </div>
      <Button
        disabled={isSubmitting}
        variant={'ghost'}
        title="adicionar valor"
        className="mx-auto mt-4 block w-4/5 bg-emerald-400 text-neutral-950"
      >
        Confirmar
      </Button>
    </form>
  );
};

export default FormAddCart;
