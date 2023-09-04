import React, {useState} from "react";
import Layout from "../components/layout/index";
import { Box } from "@chakra-ui/react";
import ProductCard from "../components/products/components/ProductCard";


const Products = () => {
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