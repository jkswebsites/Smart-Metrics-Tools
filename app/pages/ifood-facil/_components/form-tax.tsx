'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  calculatePorcent,
  calculateValueOfIfood,
  calculateValueOfSell,
} from '../helpers/calculateTax';
import { IMetrics } from './main-manager';
interface IForm {
  totalTax: number;
  valueOfSell: number;
}
interface FormTaxProps {
  setMetris: React.Dispatch<React.SetStateAction<IMetrics | null>>;
}
const FormTax = ({ setMetris }: FormTaxProps) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<IForm>({
    defaultValues: {
      totalTax: 28,
    },
  });

  const onSubmit: SubmitHandler<IForm> = ({ totalTax, valueOfSell }) => {
    const porcent = calculatePorcent(totalTax);
    const valueIfood = calculateValueOfIfood(valueOfSell, totalTax, porcent);
    const valueTotalOfSell = calculateValueOfSell(valueOfSell, valueIfood);
    setMetris({
      taxIfood: valueIfood,
      myPrice: valueTotalOfSell - valueIfood,
      valueOfSell: valueTotalOfSell,
    });
    window.scrollBy({
      top: 300,
      behavior: 'smooth',
    });
  };
  const onReset = () => {
    setMetris(null);
    resetField('totalTax');
    resetField('valueOfSell');
    window.scrollBy({
      top: -200,
      behavior: 'smooth',
    });
  };
  return (
    <div className="mx-auto w-[90%] rounded-lg bg-neutral-900 sm:w-[350px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-5 p-4"
      >
        <label>
          <p className="font-oxygen mb-1 text-sm text-neutral-100">
            Taxas do IFood
          </p>
          <input
            type="number"
            {...register('totalTax', { required: true })}
            step={'0.01'}
            placeholder="Informe o total de taxas"
            className="font-oxygen rounded-lg border border-neutral-100 bg-neutral-800 px-3 py-2 text-lg font-semibold italic tracking-wider outline-none placeholder:text-xs focus:border-emerald-500 focus:bg-neutral-950"
          />

          {errors.totalTax?.type === 'required' && (
            <p className="text-xs text-red-600">Por favor, informe as taxas</p>
          )}
        </label>

        <label>
          <p className="font-oxygen mb-1 text-sm text-neutral-100">
            Informe seu preço de venda
          </p>
          <input
            type="number"
            {...register('valueOfSell', {
              required: true,
              setValueAs: (value) => Number(value),
            })}
            step={'0.01'}
            placeholder="Seu lucro + custos do produto "
            className="font-oxygen rounded-lg border border-neutral-100 bg-neutral-800 px-3 py-2 text-lg font-semibold italic tracking-wider outline-none placeholder:text-xs focus:border-emerald-500 focus:bg-neutral-950"
          />

          {errors.valueOfSell?.type === 'required' && (
            <p className="text-xs text-red-600">
              Por favor, informe o seu valor de venda!
            </p>
          )}
        </label>

        <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-2">
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-[90%] rounded-md bg-emerald-500 py-1 text-neutral-800"
          >
            Confirmar
          </button>
          <button
            type="reset"
            onClick={onReset}
            className="w-[90%] rounded-md bg-neutral-950 py-1 text-neutral-200"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTax;
