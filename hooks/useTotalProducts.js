import React, { useMemo } from "react";

const UseTotalProducts = ({ productItems }) => {
  const handleTotalProducts = useMemo(() => {
    let productCount = 0;
    productItems.forEach((item) => {
      productCount++;
      console.log(productCount);
    });
    return productCount;
  }, [productItems]);
  return <div>totallll{handleTotalProducts}</div>;
};

export default UseTotalProducts;
