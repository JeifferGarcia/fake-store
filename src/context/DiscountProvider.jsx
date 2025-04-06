import { useState, useMemo, useCallback } from 'react';
import { DiscountContext } from './DiscountsContext';

function DiscountProvider({ children }) {
  const [discount, setDiscounts] = useState(null);

  const setDiscount = useCallback((price) => {
    if (!discount) return null;

    const discountAmount = price * (discount / 100);
    return (price - discountAmount).toFixed(2);
  }, [discount])

  const contextValue = useMemo(() => ({
    discount,
    setDiscounts,
    setDiscount,
  }), [discount, setDiscount]);

  return (
    <DiscountContext.Provider value={contextValue}>
      {children}
    </DiscountContext.Provider>
  );
}

export default DiscountProvider;
