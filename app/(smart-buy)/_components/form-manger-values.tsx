"use client"
import { ContextSmartBuy } from '@/app/context/smart-buy-context';
import React, { useContext, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


export interface FieldsForm {
  item: string;
  valueItem: number;
  amountItem: number;
}

const FormManagerValue = () => {
  const {resetAll, managerSmartBuyData, addCartList} = useContext(ContextSmartBuy);
  const {register, handleSubmit,  setFocus, resetField, formState: {errors, isSubmitting}} = useForm<FieldsForm>({
    defaultValues: {
      amountItem: 1
    }
  })
  
  const onSubmit: SubmitHandler<FieldsForm> = (data) => {
    managerSmartBuyData!(data);
    addCartList!(data);
    resetField('item');
    resetField('valueItem');
    resetField('amountItem');
  }

  useEffect(() => {
   setFocus('item')
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] py-4 bg-neutral-900 rounded-lg mx-auto border border-neutral-500 flex flex-col gap-y-4 justify-center items-center'>
      <div>
        <label>
          <span className={`${'text-white'} text-sm tracking-wide`}>Nome do Produto:</span>
          <div>
            <input
            {...register("item", { setValueAs: (value) => value.length === 0 ? 'Item': value})}
           
              type="text"
              placeholder='Item'
              className='border border-neutral-500 mt-1 px-6 py-3 rounded-md text-2xl font-semibold w-[250px] text-neutral-200 tracking-wider bg-neutral-950 focus:border-white focus:outline-dashed '/>
            <span className='relative -top-6 left-2'>*</span>
          </div>
          {errors.item && <p className='text-red-600 text-sm mt-2 ml-2'>Este campo é obrigatório!</p>}
        </label>
      </div>

      <div className='flex gap-x-4 justify-between items-center'>
        <label>
          <span className={`${'text-white'} text-sm tracking-wide`}>Valor do Produto:</span>
          <div>
            <input
            {...register("valueItem", {required: true, setValueAs: (value) => Number(value)})}
           
              type="number"
              placeholder='0,00'step={"0.01"}
              className='border border-neutral-500 mt-1 px-6 py-3 rounded-md text-2xl font-semibold w-[150px] text-neutral-200 tracking-wider bg-neutral-950 focus:border-white focus:outline-dashed '/>
            <span className='relative -top-6 left-2'>*</span>
          </div>
          {errors.valueItem && <p className='text-red-600 text-sm mt-2 ml-2'>Este campo é obrigatório!</p>}
        </label>

        <label>
          <span className={`${'text-white'} text-sm tracking-wide`}>Quantidade:</span>
          <div>
            <input
            {...register("amountItem", {required: true, setValueAs: (value) => Number(value)})}
           
              type="number"
              placeholder='0'
              className='border border-neutral-500 mt-1 px-6 py-3 rounded-md text-2xl font-semibold w-[80px] text-center text-neutral-200 tracking-wider bg-neutral-950 focus:border-white focus:outline-dashed '/>
            <span className='relative -top-6 left-2'>*</span>
          </div>
          {errors.amountItem && <p className='text-red-600 text-sm mt-2 ml-2'>Este campo é obrigatório!</p>}
        </label>
      </div>
        <button type='submit' disabled={isSubmitting} className='bg-yellow-600 w-4/5 mx-auto py-1 rounded-md text-neutral-100'>Adicionar</button>
        <button type="reset" onClick={resetAll} className='bg-neutral-950 w-4/5 mx-auto py-1 rounded-md text-neutral-100'>Cancelar</button>
    </form>
  )
}

export default FormManagerValue