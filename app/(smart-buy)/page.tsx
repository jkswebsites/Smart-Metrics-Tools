import React from 'react';
import { TbPigMoney } from 'react-icons/tb';
import PrimaryTitles, {
  PrimaryTitlesProps,
} from '../_components/primary-titles';
import ManagerSmartBuy from './_components/manager-smart-buy';
import { ContextSmartBuyProvider } from '@/app/context/smart-buy-context';
import Articles from './_components/articles';

const titlesData: PrimaryTitlesProps = {
  title: 'Controle de Gastos',
  icon: TbPigMoney,
  subtitle: 'Seus gastos sempre sobre controle!',
};

export default function Home() {
  return (
    <div className="w-full">
      <main className="mx-auto mt-20 min-h-[800px] w-[95%]">
        <PrimaryTitles {...titlesData} />
        <ContextSmartBuyProvider>
          <ManagerSmartBuy />
        </ContextSmartBuyProvider>
      </main>
      <Articles />
    </div>
  );
}
