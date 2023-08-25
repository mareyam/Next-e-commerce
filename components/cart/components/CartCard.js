import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  Input,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  removeCartProduct
  clearCart,
} from "../../../toolkit/cartSlice";

const CartCard = () => {
  const dispatch = useDispatch();

  const productItems = useSelector((state) => {
    console.log("price is");
    console.log(state.products);
    return state.cart;
  });

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleRemoveItem = (product) => {
    console.log("Delected Product:", product);
    dispatch(removeProduct(product));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleTotalAmount = () => {
    dispatch(getProductsAmount());
  };

  return (
    <TableContainer>
      <Button onClick={() => handleEmptyCart()}>empty cart</Button>
      <Button onClick={handleTotalAmount}>total amount</Button>
      {totalAmount ? <p>{totalAmount}</p> : <p>no amount found</p>}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productItems?.map((item) => {
            return (
              <Tr
                key={item.id}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                maxW="500px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Td w="50%" border="2px solid">
                  <Flex>
                    <Image
                      src={item.image}
                      alt="candles"
                      bg="gray.100"
                      w={{ base: "50%", md: "30%" }}
                    />
                    <Stack mt="2" spacing="3" p="2">
                      <Heading fontSize={{ base: "12px", md: "sm" }}>
                        {item.title}
                      </Heading>
                      <Button
                        onClick={() => handleRemoveItem(item.id)}
                        size={{ base: "xs", md: "sm" }}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Flex>
                </Td>
                <Td
                  display={{ base: "none", md: "table-cell" }}
                  border="2px solid"
                >
                  <Text fontSize="sm">${item.price} </Text>
                </Td>
                <Td border="2px solid">
                  <Text fontSize="sm">
                    <Quantity />
                  </Text>
                </Td>
                <Td border="2px solid">
                  <Text fontSize="sm">{item.price}</Text>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CartCard;

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  const handleInput = (value) => {
    setQuantity(quantity + value);
  };
  return (
    <HStack maxW="320px">
      <Button onClick={handleIncrement}>+</Button>
      <Input onClick={handleInput} />
      <Button onClick={handleDecrement}>-</Button>
    </HStack>
  );
};



  // useEffect(()=>{
  //   const cartItems = localStorage.getItem("cart");
  //   const items = cartItems ? JSON.parse(cartItems) : [];
  //   setCartItems(items);
  // },[])
