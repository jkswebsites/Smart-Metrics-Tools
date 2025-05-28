import React from 'react';
import { TbPigMoney } from 'react-icons/tb';
import PrimaryTitles, {
  PrimaryTitlesProps,
} from '../_components/primary-titles';
import ManagerSmartBuy from './_components/manager-smart-buy';
import { ContextSmartBuyProvider } from '@/app/context/smart-buy-context';
import Articles from './_components/articles';

const titlesData: PrimaryTitlesProps = {
<<<<<<< HEAD
  title: 'Controle de Gastos',
  icon: TbPigMoney,
  subtitle: 'Seus gastos sempre sobre controle!',
};
=======
  title: "Smart Buy",
  icon: TbPigMoney,
  subtitle: "Seus gastos sempre sobre controle!"
}
>>>>>>> e655a0d45ca3b26fec42a2ffbd89184021df4c25

export default function Home() {
  return (
    <div className="w-full">
<<<<<<< HEAD
      <main className="mx-auto mt-20 min-h-[800px] w-[95%]">
        <PrimaryTitles {...titlesData} />
=======
      <main className="w-[95%] mx-auto min-h-[800px] mt-20">
        <PrimaryTitles {...titlesData}/>
>>>>>>> e655a0d45ca3b26fec42a2ffbd89184021df4c25
        <ContextSmartBuyProvider>
          <ManagerSmartBuy />
        </ContextSmartBuyProvider>
      </main>
      <Articles />
    </div>
  );
}
