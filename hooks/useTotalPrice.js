import React, { useMemo } from "react";

const UseTotalPrice = ({ productItems }) => {
  const handleTotalCost = useMemo(() => {
    let cost = 0;
    productItems.forEach((item) => {
      cost += item.price;
      console.log(cost);
    });
    return cost;
  }, [productItems]);

  return <div>${handleTotalCost}</div>;
};

export default UseTotalPrice;
