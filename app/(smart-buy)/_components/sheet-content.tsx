import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {useContext} from 'react';
import { ContextSmartBuy } from '@/app/context/smart-buy-context'
import { formatBR } from "@/app/helpers/formatCurrency";
import { BsCart4 } from "react-icons/bs";
const SheetContentMenu = () => {
    const  {cartSmartBuy} = useContext(ContextSmartBuy)
    console.log(cartSmartBuy);
    
  return (
    
    <SheetContent  className="bg-neutral-900">
        <SheetHeader>
            
            <SheetTitle className="text-yellow-500 text-2xl">
                <h2 className="flex text-4xl items-center justify-center">Smart <BsCart4 className="text-white" /> Buy</h2>
            </SheetTitle>
            <SheetDescription className="text-neutral-300 text-center">
                Lista de Items adicionados ao carrinho
            </SheetDescription>
        </SheetHeader>
        <div className="w-[95%] h-16 mt-7 mx-auto">
            { cartSmartBuy.length > 0 ? (
                <>
                 <div className="w-28 h-16 bg-neutral-900 mb-4 rounded-lg p-1 flex flex-col">
                    <span className="text-yellow-500">Total:</span>
                    <span className="font-black">
                        {
                            formatBR(cartSmartBuy.reduce((acc, curr) => acc + curr.total, 0))
                        }
                    </span>
                 </div>
                 <ul className="space-y-3">
                    { cartSmartBuy.map((item, index) => (
                        <li key={index} className="bg-neutral-800  p-4 rounded-xl flex items-center justify-between border border-yellow-500">
                            <span className="text-yellow-500 font-bold">{item.item}</span>
                            <span>{formatBR(item.valueItem)}</span>
                            <span>X</span>
                            <span>{item.amountItem}</span>
                            <span>=</span>
                            <span>{formatBR(item.total)}</span>
                        </li>
                    ))}
                </ul>
             </>
            ) : (
                <p className="text-center text-neutral-500">Não há item no carrinho!</p>
            )

            }
           
        </div>
  </SheetContent>
    
  )
}

export default SheetContentMenu