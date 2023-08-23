import React, { useState } from "react";
import ProductsTest from "../components/test/ProductsTest"; 

const Test = () => {
  const [showAddToCart, setIsShowAddToCart] = useState(true);
  return (
    <div>
      <ProductsTest showAddToCart={showAddToCart} />
    </div>
  );
};

export default Test;
