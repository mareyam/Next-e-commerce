import { Center, Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function CenterCard() {
  return (
    <Center h="100%">
      <VStack
        textAlign="left"
        paddingLeft="5%"
        border="2px solid red"
        bgColor="white"
        opacity="0.75"
      >
        <Box>
          <Heading
            marginTop="5%"
            fontSize="16px"
            fontWeight="bold"
            fontFamily="Poppins"
            letterSpacing="2px"
          >
            New Arrival
          </Heading>
          <Heading fontSize="40px" w="80%">
            Discover Our New Collection
          </Heading>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
        </Box>
        <Box marginTop="5%">
          <Button fontSize="12px" padding="50%">
            BUY NOW
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}
