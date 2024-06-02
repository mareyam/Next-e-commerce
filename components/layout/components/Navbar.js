import React, { useState } from "react";
import {
  Center,
  Icon,
  CheckIcon,
  IconButton,
  Button,
  Container,
  SimpleGrid,
  Box,
  Image,
  HStack,
  Input,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import styles from "../../../styles/Home.module.css";
import AddToCartPopup from "../../common/AddToCartPopup";

const Navbar = () => {
  const [toggleHam, setToggleHam] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Container
      bg="gray.100"
      maxW="100vw"
      position="sticky"
      top="0"
      zIndex="105"
    >
      <Flex
        align="center"
        p={{ base: "2", md: "5" }}
        justifyContent="space-between"
      >
        <Link as={NextLink} href="/">
          <Heading>Logo</Heading>
        </Link>

        {isDesktop && (
          <HStack spacing="none">
            <Box
              borderRadius="8"
              borderRightRadius="0"
              border="2px solid blue"
              w="sm"
              bg="white"
            >
              <Input border="none" placeholder="Search" />
            </Box>

            <Button
              borderRadius="0"
              borderRightRadius="8"
              color="white"
              bg="blue"
              _hover={{
                color: "white",
                bg: "blue",
              }}
            >
              Search
            </Button>
          </HStack>
        )}

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            transition="all 0.3s ease-out"
            w="50px"
            transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
            fontSize={{ base: "xl", md: "2xl" }}
            icon={
              <Box>
                <DragHandleIcon />
              </Box>
            }
            onClick={() => setToggleHam(!toggleHam)}
          ></IconButton>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <HStack
            position="relative"
            display={{ base: "block", md: "flex" }}
            justifyContent="space-around"
            gap="3"
          >
            <AddToCartPopup />
            <Link className={styles.linkhover} as={NextLink} href="/">
              Home
            </Link>
            <Link as={NextLink} href="/products">
              Products
            </Link>
            <Link as={NextLink} href="/cart">
              Cart
            </Link>
          </HStack>
        </Box>
      </Flex>

      {toggleHam && (
        <Box
          top="12"
          display={{ base: "block", md: "none" }}
          right="0"
          bg="white"
          zIndex="105"
          position="absolute"
          h="150px"
          w="150px"
        >
          <Stack spacing="5">
            <Link as={NextLink} href="/">
              Home
            </Link>
            <Link as={NextLink} href="/products">
              Products
            </Link>
            <Link as={NextLink} href="/cart">
              Cart
            </Link>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
