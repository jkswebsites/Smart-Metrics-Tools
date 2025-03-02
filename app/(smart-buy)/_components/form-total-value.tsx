"use client"
import React, { useContext, useEffect } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form"
import { CgSpinnerTwo } from 'react-icons/cg';
import { ContextSmartBuy } from '@/app/context/smart-buy-context';

interface FieldForm {
  valueTotal: number;
}

const FormTotalValue = () => {
  const {addValueTotal} = useContext(ContextSmartBuy)
  const {register, handleSubmit,  setFocus, resetField, formState: {errors, isSubmitting}} = useForm<FieldForm>({
    defaultValues: {
      valueTotal: 0,
    }
  })
  
  const onSubmit: SubmitHandler<FieldForm> = (data) => {
    addValueTotal!(data.valueTotal);
    
    resetField('valueTotal')
  }
  useEffect(() => {
   setFocus('valueTotal')
  }, [])

  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='my-3 w-[95%] py-4 bg-neutral-900 rounded-lg mx-auto border border-neutral-500 flex justify-center items-center'>
      <div>
        <label>
          <span className={`${'text-white'} text-sm tracking-wide`}>Valor para gastar:</span>
          <div>
            <input
            {...register("valueTotal", {required: true, setValueAs: (value) => Number(value)})}
           
              type="number"
              placeholder='0,00'step={"0.01"}
              className='border border-neutral-500 mt-1 px-6 py-3 rounded-md text-2xl font-semibold w-[250px] text-neutral-200 tracking-wider bg-neutral-950 focus:border-white focus:outline-dashed '/>
            <span className='relative -top-6 left-2'>*</span>
          </div>
          {errors.valueTotal && <p className='text-red-600 text-sm mt-2 ml-2'>Este campo é obrigatório!</p>}
        </label>
      </div>
      <button disabled={isSubmitting} className='ml-7 bg-green-700 text-2xl p-2 rounded-lg' title='add'>
        {
          !isSubmitting ? <FaRegPlusSquare /> : <CgSpinnerTwo className='animate-spin'/>

        }
      </button>
    </form>
  )
}

export default FormTotalValue
