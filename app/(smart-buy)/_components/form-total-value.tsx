'use client';
import React, { useContext, useEffect } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';
import { ContextSmartBuy } from '@/app/context/smart-buy-context';

interface FieldForm {
  valueTotal: number;
}

const FormTotalValue = () => {
  const { addValueTotal } = useContext(ContextSmartBuy);
  const {
    register,
    handleSubmit,
    setFocus,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<FieldForm>({
    defaultValues: {
      valueTotal: 0,
    },
  });

  const onSubmit: SubmitHandler<FieldForm> = (data) => {
    addValueTotal!(data.valueTotal);
    resetField('valueTotal');
  };
  useEffect(() => {
    setFocus('valueTotal');
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-3 flex w-[95%] items-center justify-evenly rounded-lg border border-neutral-500 bg-neutral-900 px-2 py-2"
    >
      <div>
        <label>
          <span className={`${'text-white'} text-sm tracking-wide`}>
            Valor para gastar:
          </span>
          <div>
            <input
              {...register('valueTotal', {
                required: true,
                setValueAs: (value) => Number(value),
              })}
              type="number"
              placeholder="0,00"
              step={'0.01'}
              className="mt-1 w-[95%] rounded-md border border-neutral-500 bg-neutral-950 px-4 py-3 text-center text-2xl font-semibold tracking-wider text-neutral-200 focus:border-white focus:outline-dashed sm:w-[250px]"
            />
            <span className="relative -top-6 left-2">*</span>
          </div>
          {errors.valueTotal && (
            <p className="ml-2 mt-2 text-sm text-red-600">
              Este campo é obrigatório!
            </p>
          )}
        </label>
      </div>
<<<<<<< HEAD
      <button
        disabled={isSubmitting}
        className="mx-2 rounded-lg bg-green-700 p-2 text-2xl"
        title="add"
      >
        {!isSubmitting ? (
          <FaRegPlusSquare />
        ) : (
          <CgSpinnerTwo className="animate-spin" />
        )}
=======

      <button disabled={isSubmitting} type='submit' className=' bg-green-700 text-2xl p-2 mx-2 rounded-lg' title='add'>
        {
          !isSubmitting ? <FaRegPlusSquare /> : <CgSpinnerTwo className='animate-spin'/>

        }
>>>>>>> e655a0d45ca3b26fec42a2ffbd89184021df4c25
      </button>
    </form>
  );
};

export default FormTotalValue;
