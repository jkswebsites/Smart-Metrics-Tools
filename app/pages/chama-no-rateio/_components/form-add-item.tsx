'use client';
import {
  ChamaNoRateioContext,
  IInputs,
} from '@/app/context/chamaNoRateioContext';
import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { tv } from 'tailwind-variants';

const labelStyles = tv({
  base: 'absolute text-neutral-400 transition-all duration-500 ease-in-out',
  variants: {
    focus: {
      off: 'left-2 top-0 text-sm',
      on: 'text-[7px] left-2 italic text-custom-secondary',
    },
  },
  defaultVariants: {
    focus: 'off',
  },
});
const inputStyles = tv({
  base: 'font-oxygen focus:border-custom-secondary border-neutral-400 transition-all duration-500 ease-in-out outline-none italic font-oxygen w-4/5 text-sm rounded-lg border bg-neutral-700 py-2 pl-2',
});
const buttonStyles = tv({
  base: 'rounded-sm py-1 w-full border border-neutral-700 hover:opacity-100 opacity-65 opacity transition-all duration-500 ease-in-',
  variants: {
    bg: {
      confirm:
        'bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800',
      cancel: 'bg-slate-900',
    },
  },
  defaultVariants: {
    bg: 'confirm',
  },
});

const FormAddItem = () => {
  const { addItem } = useContext(ChamaNoRateioContext);
  const [fieldFocused, setFieldFocused] = useState<string[]>([]);
  const {
    register,
    setFocus,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IInputs>({
    defaultValues: {
      nameItem: '',
      quantity: 1,
    },
  });
  const handleFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    setFieldFocused((prevState) => [...prevState, target.name]);
  };
  const handleBluer = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (target.value.trim().length === 0) {
      setFieldFocused((prevState: string[]) => {
        return prevState.filter((fieldName) => fieldName !== target.name);
      });
    }
  };
  const handleReset = () => {
    setFocus('nameItem');
    setFieldFocused([]);
  };
  const onSubmit: SubmitHandler<IInputs> = (data) => {
    addItem({
      ...data,
      price: Number(data.price),
    });
    resetField('nameItem');
    resetField('price');
    resetField('quantity');
    setFieldFocused([]);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full flex-col justify-center gap-3 p-4 sm:w-4/5"
    >
      <div>
        <label htmlFor="txt-name" className="relative">
          <span
            className={labelStyles({
              focus: fieldFocused.includes('nameItem') ? 'on' : 'off',
            })}
          >
            Nome do item:
          </span>
          <input
            {...register('nameItem')}
            id="txt-name"
            type="text"
            className={inputStyles()}
            onFocus={handleFocus}
            onBlurCapture={handleBluer}
          />
          <span className="relative -top-2 left-2 text-neutral-400">*</span>
        </label>
        {errors.nameItem?.type === 'required' && (
          <p className="mt-1 text-[8px] italic text-red-600">
            Este Campo é obrigatório!
          </p>
        )}
      </div>

      <div className="flex">
        <div>
          <label htmlFor="txt-price" className="relative">
            <span
              className={labelStyles({
                focus: fieldFocused.includes('price') ? 'on' : 'off',
              })}
            >
              Preço:
            </span>
            <input
              {...register('price', { required: true })}
              id="txt-price"
              type="number"
              className={`${inputStyles()} w-[70%]`}
              onFocus={handleFocus}
              onBlurCapture={handleBluer}
              step="0.01"
            />
            <span className="relative -top-2 left-2 text-neutral-400">*</span>
          </label>
          {errors.price?.type === 'required' && (
            <p className="mt-1 text-[8px] italic text-red-600">
              Este Campo é obrigatório!
            </p>
          )}
        </div>

        <div>
          <label htmlFor="txt-quantity" className="relative">
            <span className={`${labelStyles({ focus: 'on' })}`}>
              Quantidade:
            </span>
            <input
              {...register('quantity', { required: true })}
              id="txt-quantity"
              type="number"
              className={`${inputStyles()} w-[50%] text-center font-bold`}
              onFocus={handleFocus}
              onBlurCapture={handleBluer}
            />
            <span className="relative -top-2 left-2 text-neutral-400">*</span>
          </label>
          {errors.quantity?.type === 'required' && (
            <p className="mt-1 text-[8px] italic text-red-600">
              Este Campo é obrigatório!
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto mt-2 flex w-full flex-col items-center justify-center gap-2 sm:w-[300px]">
        <button
          type="submit"
          disabled={isSubmitting}
          className={buttonStyles()}
        >
          Confirmar
        </button>
        <button
          type="reset"
          onClick={handleReset}
          className={buttonStyles({ bg: 'cancel' })}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormAddItem;
