import { Box } from "@chakra-ui/react";
import { LandingImage, CandleDetail, Testimonials } from "../components/hero";
import {
  ProductItems
} from "../components/products";
import { useState } from "react";
import Layout from "../components/layout";


export default function Home() {
  const [itemSplice, setItemSplice] = useState(8);
  return (
    <Box>
      <Layout>
        <LandingImage />
        <ProductItems itemSplice={itemSplice} />
        <CandleDetail />
        <Testimonials />
      </Layout>
    </Box>
  );
}
