import { Box, Heading } from "@chakra-ui/react";
import { CandleDetail } from "@/components/hero";
import { ProductItems } from "@/components/products";
import Layout from "@/components/layout";
import Hero from "@/components2/Hero";
import Deals from "@/components2/Deals";
import Section from "@/common/Section/index";
import { INTERIOR } from "@/data/interior";
import { TECH } from "@/data/tech";

const Home = () => {
  return (
    <Box mx={{ base: "0", lg: "40" }}>
      <Hero />
      <Deals />
      <Section
        img="/common/Section1.png"
        title="Home and outdoor"
        data={INTERIOR}
      />
      <Section
        img="/common/Section2.png"
        title="Consumer electronics and gadgets"
        data={TECH}
      />
      <Box py="5" px="2" my="2">
        <Heading fontSize="20">Recommeded Products</Heading>
        <ProductItems count={4} />
      </Box>
      <CandleDetail />
    </Box>
  );
};

export default Home;
