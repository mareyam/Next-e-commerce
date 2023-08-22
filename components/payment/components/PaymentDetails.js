import React from "react";
import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Center, // Import Center component
} from "@chakra-ui/react";

const PaymentDetails = () => {
  return (
    <Box p={5}>
      <Heading>Payment Confirmed</Heading>
      <Text>Order #xxxx</Text>
      <Text>
        Thank you Joe for buying Candleaf. The nature is grateful to you. Now
        that your order is confirmed it will be ready to ship in 2 days. Please
        check your inbox in the future for your order updates.
      </Text>
      <Button colorScheme="green">Back to shopping</Button>
      <Text fontSize="12px">Print receipt</Text>
    </Box>
  );
};

export default PaymentDetails;
