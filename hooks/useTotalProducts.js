//calculates total products count thats added in cart
import React, { useMemo } from "react";
const useTotalProducts = (productItems) => {
  const handleTotalProducts = useMemo(() => {
    let productCount = 0;
    productItems.forEach((item) => {
      productCount++;
      console.log(productCount);
    });
    return productCount;
  }, [productItems]);
  return handleTotalProducts;
};

export default useTotalProducts;
