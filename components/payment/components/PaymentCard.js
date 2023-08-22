import React from "react";
import PaymentDetails from "./PaymentDetails";
import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Center, // Import Center component
} from "@chakra-ui/react";
import Checkout from "../../checkout/components/Checkout";

const PaymentCard = () => {
  return (
    <Center h="100vh" textAlign="center">
      <Container maxW="container.lg">
        <PaymentDetails/>
      </Container>
    </Center>
  );
};

export default PaymentCard;
