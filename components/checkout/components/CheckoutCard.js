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
import Form from "./Form";

const CheckoutCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Heading as="h4">Checkout</Heading>
        <Text fontSize="12px">Buy your favourite items now</Text>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box w={{ base: "100%", md: "50%" }}>
          <SimpleGrid
            columns={{ base: 1, md: 1 }}
            spacing="2"
            border="2px solid red"
          >
            {cartItems?.map((item) => (
              <Box
                key={item.id}
                border="2px solid green"
                maxW="100%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Flex>
                  <Image
                    src={item.image}
                    alt="candles"
                    bg="gray.100"
                    w={{ base: "50%", md: "50%" }}
                    h={{ base: "50%", md: "100%" }}
                  />
                  <Stack mt="2" spacing="3" p="2">
                    <Heading fontSize={{ base: "12px", md: "lg" }}>
                      {item.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "12px", md: "md" }}
                      color="green.400"
                    >
                      {item.price}
                    </Text>
                  </Stack>
                </Flex>
                <Divider />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box border="2px solid" w={{ base: "100%", md: "50%" }}>
          <Form />
        </Box>
      </Flex>

      {/* <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap">
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing="2" border="2px solid">
          {cartItems?.map((item) => (
            <Box
              border="2px solid"
              maxW="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Flex>
                <Image
                  src={item.image}
                  alt="candles"
                  bg="gray.100"
                  w={{ base: "50%", md: "40%" }}
                  h={{ base: "50%", md: "40%" }}
                />
                <Stack mt="2" spacing="3" p="2">
                  <Heading fontSize={{ base: "12px", md: "lg" }}>
                    {item.title}
                  </Heading>
                  <Text fontSize={{ base: "12px", md: "md" }} color="green.400">
                    {item.price}
                  </Text>
                </Stack>
              </Flex>
              <Divider />
            </Box>
          ))}
        </SimpleGrid>
        <Box>
          <Form />
        </Box>
      </Flex> */}
    </Container>
  );
};

export default CheckoutCard;
