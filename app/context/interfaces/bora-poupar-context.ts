import { IFormAddCart } from '@/app/pages/bora-poupar/_components/form-add-cart';

export interface BoraPoupar {
  totalValue: number;
  valueCurrent: number;
  totalSpent: number;
  cart: IFormAddCart[];
}
export interface ContextBoraPoupar {
  metrics: BoraPoupar;
  addValueTotal: (totalValue: number) => void;
  addItemCart: (dataCart: IFormAddCart) => void;
  resetAll: () => void;
  deleteItem: (item: string, currencyValue: number) => void;
}
