import { useState, useMemo } from 'react';
import { DiscountContext } from './DiscountsContext';

function DiscountProvider({ children }) {
  const [discounts, setDiscounts] = useState(0);

  const contextValue = useMemo(() => ({
    discounts,
    setDiscounts,
  }), [discounts]);

  return (
    <DiscountContext.Provider value={contextValue}>
      {children}
    </DiscountContext.Provider>
  );
}

export default DiscountProvider;
