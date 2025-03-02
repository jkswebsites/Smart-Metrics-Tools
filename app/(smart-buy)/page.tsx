import { TbPigMoney } from "react-icons/tb";
import PrimaryTitles, { PrimaryTitlesProps } from "../_components/primary-titles";
import ManagerSmartBuy from "./_components/manager-smart-buy";
import { ContextSmartBuyProvider } from '@/app/context/smart-buy-context';

const titlesData: PrimaryTitlesProps = {
  title: "Smart Buy",
  icon: TbPigMoney,
  subtitle: "Keep your purchases on control!"
}

export default function Home() {
  return (
    <div className="h-full w-full">
      <main className="w-[95%] mx-auto min-h-[800px] mt-20">
        <PrimaryTitles {...titlesData}/>
        <ContextSmartBuyProvider>

        <ManagerSmartBuy/>
        </ContextSmartBuyProvider>
      </main>
    </div> 
  );
}
