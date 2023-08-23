import React from "react";
import { ProductItems } from "../components/products";
import { useState } from "react";

const Products = () => {
  const [showAddToCart, setIsShowAddToCart] = useState(true);
  return (
    <div>
      <ProductItems showAddToCart={showAddToCart} />
    </div>
  );
};

export default Products;
