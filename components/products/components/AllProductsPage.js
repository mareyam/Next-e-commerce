import React from "react";
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
} from "@chakra-ui/react";
import { useProducts } from "../../../hooks/useProducts";
import { getProducts } from "../../../lib/helper";
import { useForm } from "react-hook-form";

const AllProductsPage = ({ addToCart }) => {
  const { data } = useProducts();
  return (
    <Container maxW="container.lg" border="2px solid">
      <Box textAlign="center">
        <Heading as="h4">Products</Heading>
        <Text fontSize="12px">Order it for you or for your beloved ones</Text>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing="2">
        {data?.map((item) => {
          return (
            <Box
              maxW="250px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box>
                <Image src={item.image} alt="candles" bg="gray.100" w="100%" />
                <Stack mt="2" spacing="3" p="2">
                  <Heading size="xs">{item.title}</Heading>
                  <Text alignItems="flex-end" color="green.600" fontSize="sm">
                    ${item.price}
                  </Text>
                  <Button key={item.id} onClick={console.log("clicked")}>
                    Add to Cart
                  </Button>
                  {/* {addToCart? <Button onClick={console.log(item.title)}>Add to Cart</Button>:<></>} */}
                </Stack>
              </Box>
              <Divider />
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default AllProductsPage;
