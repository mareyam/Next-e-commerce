import { Box } from "@chakra-ui/react";
import { LandingImage, CandleDetail, Testimonials } from "../components/hero";
import {
  ProductItems,
  ProductCart,
  ProductDetail,
} from "../components/products";
import UseProducts from "../hooks/useProducts";
import Footer from "../components/layout/components/Footer";
import { useState } from "react";

export default function Home() {
  const [itemSplice, setItemSplice] = useState(8);
  return (
    <Box>
      <LandingImage />
      <ProductItems itemSplice={itemSplice} />
      <CandleDetail />
      <Testimonials />
      <Footer />
    </Box>
  );
}
