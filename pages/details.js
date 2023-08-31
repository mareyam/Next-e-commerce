import React, { useState } from "react";
import Header from "../components/details/Header";
import ProductCard from "../components/details/ProductCard";
import Layout from "../components/layout";

const Details = () => {
  return (
    <Layout>
        <Header/>
        <ProductCard/>
    </Layout>
  );
};

export default Details;
