import { Box } from "@chakra-ui/react";
import { LandingImage, CandleDetail, Testimonials } from "../components/hero";
import {
  ProductItems
} from "../components/products";
import Layout from "../components/layout";


export default function Home() {
  return (
    <Box>
      <Layout>
        <LandingImage />
        <ProductItems />
        <CandleDetail />
        <Testimonials />
      </Layout>
    </Box>
  );
}
