import React, { useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing="2">
        {cartItems?.map((item) => (
          <Box
            key={item.id}
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
                <Text fontSize={{ base: "12px", md: "md" }} color="green.400">
                  {item.price}
                </Text>
              </Stack>
            </Flex>
            <Divider />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Checkout;
