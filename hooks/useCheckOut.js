//alternative to checkoutSlice to add products to checkout, NOT TESTED
import React, { useMemo } from "react";
const useCheckout = (productItems) => {
  const handleCheckout = useMemo(() => {
    let checkoutArray = [];
    productItems.forEach((item) => {
      checkoutArray.push(item);
      console.log(checkoutArray);
    });
    return checkoutArray;
  }, [productItems]);

  return handleCheckout;
};

export default useCheckout;
