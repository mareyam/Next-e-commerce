import React, {useState} from "react";
// import { ProductItems, ProductCard } from "../components/products";

import Layout from "../components/layout/index";
import { Box } from "@chakra-ui/react";
import ProductCard from "../components/products/components/ProductCard";


const Products = () => {
  // const [showAddToCart, setIsShowAddToCart] = useState(true);
  return (
    <Layout>
      <ProductCard/>
    </Layout>
  );
};

export default Products;



{/* <Box>
      <Layout>
        <ProductItems showAddToCart={showAddToCart} />
      </Layout>
    </Box> */}