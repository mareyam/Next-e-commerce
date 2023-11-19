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
import { React, useEffect, useState } from "react";
import { CATEGORIES } from "data/categories";

const index = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [selectSubCategory, setSelectSubCategory] = useState("");
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleSelectCategory = (category) => {
    setSelectCategory(category);
    console.log(category);
  };

  const handleSelectSubCategory = (subCategory) => {
    setSelectSubCategory(subCategory);
    console.log(subCategory);
  };

  return (
    <>
      {isDesktop ? (
        <>
          <HStack
            border="1px solid #8B96A5"
            h={{ base: "100%", lg: "full" }}
            p="5"
            justifyContent="space-between"
            pos="relative"
          >
            <VStack align="left">
              {CATEGORIES.map((category, index) => (
                <>
                  {isDesktop ? (
                    <>
                      <Box
                        key={index}
                        py="1"
                        borderRadius="4"
                        px="2"
                        cursor="pointer"
                        bg={selectCategory == index ? "#E5F1FF" : "white"}
                        onMouseEnter={() => handleSelectCategory(index)}
                        onMouseLeave={() => setSelectCategory(null)}
                        display="flex"
                      >
                        <Text>{category.name}</Text>
                        {selectCategory === index && (
                          <Box
                            top="9"
                            pos="absolute"
                            left="44"
                            bg="white"
                            h="96"
                            border="1px solid"
                          >
                            {category.subcategories.map(
                              (subcategory, index) => (
                                <Box
                                  key={index}
                                  py="2"
                                  borderRadius="4"
                                  px="5"
                                  cursor="pointer"
                                  bg={
                                    selectSubCategory == index
                                      ? "#E5F1FF"
                                      : "white"
                                  }
                                  onMouseEnter={() =>
                                    handleSelectSubCategory(index)
                                  }
                                  onMouseLeave={() =>
                                    setSelectSubCategory(null)
                                  }
                                  display="flex"
                                >
                                  <Text>{subcategory}</Text>
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    </>
                  ) : (
                    <>
                      <HStack border="1px solid" h="20">
                        <Text>{category.name}</Text>
                      </HStack>
                    </>
                  )}
                </>
              ))}
            </VStack>
            <Image src="/Hero/hero-bannner.png" h="100%" />
            {/* <Box
          left="40%"
          transform="translateX(-50%)"
          border="2px solid"
          pos="absolute"
        >
          <Text>Latest trending Electronic items</Text>
          <Button bg="white" color="black">
            Learn more
          </Button>
        </Box> */}

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
                  <Button w="full" bg="blue" color="white">
                    Join now
                  </Button>
                  <Button
                    w="full"
                    bg="white"
                    color="blue"
                    border="1px solid blue"
                  >
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
          </HStack>
        </>
      ) : (
        <>
          <VStack
            border="1px solid #8B96A5"
            h={{ base: "100%", lg: "full" }}
            p="5"
            justifyContent="space-between"
          >
            <HStack overflowY="scroll" w="96">
              {CATEGORIES.map((category, index) => (
                <Box
                  key={index}
                  borderRadius="4"
                  cursor="pointer"
                  bg={selectCategory == index ? "#E5F1FF" : "white"}
                  onMouseEnter={() => handleSelectCategory(index)}
                  onMouseLeave={() => setSelectCategory(null)}
                  display="flex"
                  h="8"
                  px="2"
                  border="2px solid"
                  w="20"
                  overflowY="scroll"
                >
                  <Text>{category.name}</Text>
                </Box>
              ))}
            </HStack>
            <Image src="/Hero/hero-bannner.png" h="100%" />
          </VStack>
        </>
      )}
    </>
  );
};

export default index;
