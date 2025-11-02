export const calculatePorcent = (totalTax: number): number => {
  return 100 - totalTax;
};

export const calculateValueOfIfood = (
  valueOfSell: number,
  totalTax: number,
  porcent: number
): number => {
  return (valueOfSell * totalTax) / porcent;
};

export const calculateValueOfSell = (
  valueOfSell: number,
  valueIFood: number
) => {
  return valueOfSell + valueIFood;
};
