"use client"
import React, { useContext } from 'react'
import PainelData from './painel-data'
import FormTotalValue from './form-total-value'
import FormManagerValue from './form-manger-values'
import { ContextSmartBuy } from '@/app/context/smart-buy-context'
import Navbar from './navbar'


const ManagerSmartBuy = () => {
  const {smartBuyDatas } = useContext(ContextSmartBuy)
    

  return (
    <div className='sm:w-[450px] mx-auto mt-[50px]'>
      <PainelData/>
      <Navbar/>
      <FormTotalValue/>
      {smartBuyDatas.valueTotal > 0 && <FormManagerValue/>}
    </div>
  )
}

export default ManagerSmartBuy
