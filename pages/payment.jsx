import CheckoutCard from "@/components/checkout/components/CheckoutCard";
import { PaymentCard } from "@/components/payment";

import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";

const Payment = () => {
  return (
    <div>
      <Flex direction={{ base: "column-reverse", md: "row" }} flexWrap="wrap">
        <Box w={{ base: "100%", md: "50%" }}>
          <CheckoutCard />
        </Box>
        <Box h="100vh" w={{ base: "100%", md: "50%" }}>
          <PaymentCard />
        </Box>
      </Flex>
    </div>
  );
};

export default Payment;
