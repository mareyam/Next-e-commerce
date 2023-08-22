import { Box } from "@chakra-ui/react";
import { LandingImage, CandleDetail, Testimonials} from "../components/hero";
import {ProductItems, ProductCart, ProductDetail} from "../components/products";
import UseProducts from "../hooks/useProducts"; 
import Footer from "../components/layout/components/Footer";

export default function Home() {
  return (
    <Box>
       <LandingImage />
       <ProductItems/>
       <CandleDetail/>
      <Testimonials/> 
      <Footer/>
    </Box>
  );
}
