import {
  HStack,
  Container,
  Image,
  VStack,
  Box,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { React, useState } from "react";
import AllCategories from "../../common/AllCategories";

const index = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack
      border="1px solid #8B96A5"
      h={{ base: "100%", lg: "full" }}
      p="5"
      justifyContent="space-between"
      pos="relative"
      display={{ base: "block", lg: "flex" }}
    >
      <AllCategories />
      <Image src="/Hero/hero-bannner.png" h="100%" />

      {isDesktop && (
        <VStack h="96" w="64">
          <Box borderRadius="8" h="44" bgColor="#E3F0FF" p="4">
            <HStack>
              <Image
                alt="image"
                src="/Avatars/Avatar.png"
                rounded="full"
                boxSize="12"
              />
              <Text fontSize="20">Hi, user let's get started</Text>
            </HStack>
            <VStack>
              <Button
                w="full"
                bg="blue"
                color="white"
                _hover={{
                  color: "blue",
                  bg: "gray.100",
                  border: "1px solid blue",
                }}
              >
                Join now
              </Button>
              <Button w="full" bg="white" color="blue" border="1px solid blue">
                Log in
              </Button>
            </VStack>
          </Box>
          <Box borderRadius="8" p="4" h="5.5em" bg="#F38332">
            <Text color="white" fontSize="16">
              Get US $10 off with a new supplier
            </Text>
          </Box>
          <Box borderRadius="8" p="4" h="5.5em" bg="#55BDC3">
            <Text color="white" fontSize="16">
              Send quotes with supplier preferences
            </Text>
          </Box>
        </VStack>
      )}
    </HStack>
  );
};

export default index;
