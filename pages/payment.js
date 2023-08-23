import Checkout from "../components/checkout/components/Checkout";
import { PaymentCard } from "../components/payment";

import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";

const Payment = () => {
  return (
    <div>
      {/* <Heading textAlign="center">Checkout</Heading> */}
      <Flex direction={{ base: "column-reverse", md: "row" }} flexWrap="wrap">
        <Box w={{ base: "100%", md: "50%" }}>
          <Checkout />
        </Box>
        <Box h="100vh" w={{ base: "100%", md: "50%" }}>
          <PaymentCard />
        </Box>
      </Flex>
    </div>
  );
};

export default Payment;
