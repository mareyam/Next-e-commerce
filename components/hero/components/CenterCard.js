import { Center, Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function CenterCard() {
  return (
    <Center h="100%" textAlign="center">
      <VStack textAlign="center">
        <Box>
          <Heading fontSize="20px">The nature candle</Heading>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
        </Box>
        <Box>
          <Button>Discover our collection</Button>
        </Box>
      </VStack>
    </Center>
  );
}
