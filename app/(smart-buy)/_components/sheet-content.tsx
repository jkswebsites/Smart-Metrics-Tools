import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {useContext} from 'react';
import { ContextSmartBuy } from '@/app/context/smart-buy-context'
import { formatBR } from "@/app/helpers/formatCurrency";
import { BsCart4 } from "react-icons/bs";
const SheetContentMenu = () => {
    const  {cartSmartBuy} = useContext(ContextSmartBuy)
    
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
                 <div className="w-28 h-16 mb-4 rounded-lg p-1 flex justify-center items-center gap-x-2 relative">
                    <span className="text-yellow-500 text-sm absolute bottom-1 font-black -right-2">Total:</span>
                    <span className="font-black text-2xl">
                        {
                            formatBR(cartSmartBuy.reduce((acc, curr) => acc + curr.total, 0))
                        }
                    </span>
                 </div>
                 <ul className="space-y-3 h-[400px] overflow-y-auto ">
                    { cartSmartBuy.map((item, index) => (
                        <li key={index} className="bg-neutral-800  px-2 rounded-xl flex flex-col justify-between border border-yellow-500">
                            <span className="text-yellow-500 font-bold ">{item.item}</span>
                            <div className="flex gap-x-2 items-center py-2">
                            <span>{formatBR(item.valueItem)}</span>
                            <span>X</span>
                            <span>{item.amountItem}</span>
                            <span>=</span>
                            <span>{formatBR(item.total)}</span>
                         </div>
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