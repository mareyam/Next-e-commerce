import {
  Flex,
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  SimpleGrid,
  Container,
  Spacer,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container
      w="100vw"
      py="20"
      maxW="container.xl"
      bgColor="black"
      color="white"
      overflow="hidden"
    >
      <Wrap column={{ base: 1, md: 2 }} spacing="2">
        <Box>
          <Heading>Candleaf</Heading>
          <Text>
            Your natural candle made for your home and for your wellness.
          </Text>
        </Box>
        <Spacer />
        <HStack spacing="10" column={{ base: 1, md: 2 }}>
          <VStack align="flex-start">
            <Text color="green.500">Discovery</Text>
            <Text>New season</Text>
            <Text>Most searched</Text>
            <Text>Most sold</Text>
          </VStack>
          <VStack align="flex-start">
            <Text color="green.500">Discovery</Text>
            <Text>New season</Text>
            <Text>Most searched</Text>
            <Text>Most sold</Text>
          </VStack>
          <VStack align="flex-start">
            <Text color="green.500">Discovery</Text>
            <Text>New season</Text>
            <Text>Most searched</Text>
            <Text>Most sold</Text>
          </VStack>
        </HStack>
      </Wrap>
    </Container>
  );
};

export default Footer;
