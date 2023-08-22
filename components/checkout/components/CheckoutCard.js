import React, { useEffect } from "react";
import {
  Button,
  Container,
  SimpleGrid,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { displayProducts } from "../../../toolkit/Reducer";

const CheckoutCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(displayProducts());
  }, [dispatch]);

  return (
    <Container maxW="container.lg">
      <Box textAlign="center">
        <Heading as="h4">Checkout</Heading>
        <Text fontSize="12px">All the products that were in your cart</Text>
      </Box>
      {cartItems?.map((item) => (
        <p>title is{item.title}</p>
      ))}

      <SimpleGrid columns={{ base: 1, md: 1 }} spacing="2">
        <Box maxW="500px" borderWidth="1px" borderRadius="lg" overflow="hidden">
          {/* <Flex>
            <Image
              src={"/image 1-1.jpg"}
              alt="candles"
              bg="gray.100"
              w={{ base: "50%", md: "50%" }}
            />
            <Stack mt="2" spacing="3" p="2">
              <Heading fontSize={{ base: "12px", md: "lg" }}>
                Spiced Mint Candleaf
              </Heading>
              <Text fontSize={{ base: "12px", md: "md" }} color="green.400">
                $9.99
              </Text>
            </Stack>
          </Flex> */}
          <Divider />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default CheckoutCard;
