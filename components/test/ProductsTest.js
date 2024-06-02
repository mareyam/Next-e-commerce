import React, { useState } from "react";
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
import { useProducts } from "../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../../toolkit/cartSlice";

const ProductsTest = ({ showAddToCart }) => {
  const { data } = useProducts();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Selected Product:", product.title);
    dispatch(addCartProduct(product));
  };

  return (
    <Container maxW="container.lg" border="2px solid">
      <Box textAlign="center">
        <Heading as="h4">Products</Heading>
        <Text fontSize="12px">Order it for you or for your beloved ones</Text>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing="2">
        {data?.map((item) => (
          <Box
            key={item.id}
            maxW="250px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box>
              <Image alt="cart-item" src={item.image} bg="gray.100" w="100%" />
              <Stack mt="2" spacing="3" p="2">
                <p>isChecked: {item.isChecked ? "true" : "false"}</p>
                <Heading overflow="hidden" size="xs" isTruncated>
                  {item.title}
                </Heading>
                <Text color="green.600" fontSize="sm">
                  ${item.price}
                </Text>
                {showAddToCart && (
                  <Button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                )}
              </Stack>
            </Box>
            <Divider />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductsTest;

// setSelectedProduct((prevProducts) => [...prevProducts, product]);
{
  /* {selectedProduct? <CartItem cartitem={selectedProduct} />:<></>} */
}
