import { StaticImageData } from 'next/image';
import imgBoraPoupar from '@/app/assets/images/bora-poupar/bora-poupar-feira.png';
import imgChamaNoRateio from '@/app/assets/images/chama-no-rateio/chama-no-rateio-party.png';
import imgIFoodFacil from '@/app/assets/images/ifood-facil/candys.png';

interface IApps {
  fistWordTitle: string;
  secondWordTitle: string;
  preposition: string | boolean;
  description: string;
  link: string;
  image: StaticImageData;
}

export const apps: IApps[] = [
  {
    fistWordTitle: 'Bora',
    secondWordTitle: 'Poupar!',
    preposition: false,
    description: 'Você sempre no controle',
    link: '/pages/bora-poupar',
    image: imgBoraPoupar,
  },
  {
    fistWordTitle: 'Chama',
    secondWordTitle: 'Rateio',
    preposition: 'NO',
    description: 'Organize despesas compartilhada',
    link: '/pages/chama-no-rateio',
    image: imgChamaNoRateio,
  },
  {
    fistWordTitle: 'IFood',
    secondWordTitle: 'Fácil',
    preposition: false,
    description: 'Precifique seus Produtos',
    link: '/pages/ifood-facil',
    image: imgIFoodFacil,
  },
];
