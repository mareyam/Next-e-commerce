import React from "react";
import Link from "next/link";
import { HStack, Stack, Text, Button, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const OrderedItems = () => {
  const productItems = useSelector((state) => {
    return state.cart;
  });

  return (
    <Box
      w={{ base: "100%", md: "40%" }}
      p={{ base: "5", md: "10" }}
      backgroundColor="gray.100"
    >
      {productItems?.map((item) => (
        <HStack key={item.id} marginTop="2%" align="center">
          <Image
            src={item.image}
            alt="candles"
            bg="gray.100"
            borderRadius="10%"
            objectFit="cover"
            w={{ base: "100px", md: "100px" }}
            h={{ base: "100px", md: "100px" }}
          />
          <Stack top="0">
            <Text fontSize="md" fontWeight="bold">
              {item.title}
            </Text>
            <Text fontSize="sm">#{item.price}</Text>
          </Stack>
          <Stack textAlign="center" justifyContent="center">
            <Text fontSize="md" fontWeight="light">
              $.{item.price}.00
            </Text>
          </Stack>
        </HStack>
      ))}
      <Text mt="3" fontWeight="bold" fontSize="md">
        Tracking number:
      </Text>
      <Text fontSize="md">LHE261602449121</Text>

      <Link as={Link} href="/products">
        <Button bg="black" color="white" mt="3">
          Continue Shopping
        </Button>
      </Link>
    </Box>
  );
};

export default OrderedItems;
