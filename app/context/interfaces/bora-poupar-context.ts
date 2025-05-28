export interface BoraPoupar {
  totalValue: number;
  item: string;
  valueCurrent: number;
  totalSpent: number;
}
export interface ContextBoraPoupar {
  metrics: BoraPoupar;
  addValueTotal: (totalValue: number) => void;
}
