import {
  HStack,
  Button,
  Container,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

import CartCard from "./CartCard";
const CartItem = () => {

  return (
    <Container maxW="container.lg" border="2px solid">
      <Box textAlign="center">
        <Heading as="h5">Cart</Heading>
        <Text fontSize="12px">All your cart items</Text>
      </Box>
      <CartCard/>
      <HStack justifyContent="right">
        <Box>$ price</Box>
        <Button bgColor="green.300">Check-out</Button>
      </HStack>
    </Container>
  );
};

export default CartItem;
  // state.cart.client.products
      {/* <CartCard cartItems={productItems} /> */}

