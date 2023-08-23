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
  const [showAddToCart, setIsShowAddToCart] = useState(false);
  return (
    <Box>
      <LandingImage />
      <ProductItems showAddToCart={showAddToCart} />
      <CandleDetail />
      <Testimonials />
      <Footer />
    </Box>
  );
}
