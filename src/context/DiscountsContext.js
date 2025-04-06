import { createContext, useContext } from 'react';

export const DiscountContext = createContext();

export function useDiscounts() {
  const context = useContext(DiscountContext);
  if (!context) throw new Error('There is no discounts provider');
  return context;
}