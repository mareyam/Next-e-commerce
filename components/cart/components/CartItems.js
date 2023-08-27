import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Center, 
  Icon, 
  IconButton,
  CheckIcon,
  Checkbox,
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
  Box, 
  Container,
  Select
} from "@chakra-ui/react";
import { DragHandleIcon , TriangleDownIcon } from '@chakra-ui/icons'

import { addProduct, removeProduct } from "../../../toolkit/checkoutSlice";
import { addProductToCheckout } from "../../../toolkit/cartSlice";
import useCart from "../../../hooks/useCart";
import useTotalPrice from "../../../hooks/useTotalPrice";
import useTotalProducts from "../../../hooks/useTotalProducts";

const CartItems = () => {
  const dispatch = useDispatch();
  const { handleRemoveItem, handleEmptyCart } = useCart();
  const totalPrice = useTotalPrice(productItems);
  const totalProducts = useTotalProducts(productItems);

  const handleToCheckout = (product) => {
    console.log("Added Product:", product.title);
    dispatch(addProduct(product));
    dispatch(addProductToCheckout(product.id));

    console.log("value of addProductToCheckout in test" + product.isChecked);
  };
  const productItems = useSelector((state) => {
    console.log(state);
    return state.cart;
  });

  return (
    <Container maxW='100vw'>
      <Flex justifyContent='space-between' display={{base:'block', md:'flex'}}>      
          <TableContainer w={{base:'100%', md:'60%'}} h='400px' overflowY='scroll'>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Checkout</Th>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Total</Th>
                </Tr>
              </Thead>
              <Tbody marginTop='10px'>
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
                      <Td>
                        <Button as="checkbox" onClick={() => handleToCheckout(item)}>
                          Add
                        </Button>
                      </Td>
                      <Td w="50%" border="1px solid gray">
                        <Flex>
                          <Image
                            src={item.image}
                            alt="candles"
                            bg="gray.100"
                            w={{ base: "50%", md: "30%" }}
                          />
                          <Stack mt="2" spacing="3" p="2">
                            <Heading fontSize={{ base: "12px", md: "sm" }} w='30px'>
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
                        border="1px solid gray"
                      >
                        <Text fontSize="sm">${item.price} </Text>
                      </Td>
                      <Td border="1px solid gray">
                       quantity
                      </Td>
                      <Td border="1px solid gray">
                        <Text fontSize="sm">{item.price}</Text>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
            </TableContainer>

            <Box textAlign='center' border='2px solid' w='450px' h='auto' bg='gray.100'>
            {/* <Button onClick={handleEmptyCart}>empty cart</Button> */}
            <Heading fontSize='lg'>Cart Total</Heading>
            <Text>Total Amount: ${totalPrice}</Text>
            <Text>Total Products: {totalProducts}</Text>
            </Box>
        </Flex>   
      </Container>  



  );
};
export default CartItems;



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

// import { useState, useEffect } from "react";
// import {
//   Table,
//   TableContainer,
//   Tbody,
//   Td,
//   Th,
//   Thead,
//   Tr,
//   HStack,
//   Input,
//   Button,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Flex,
// } from "@chakra-ui/react";
// import { useSelector, useDispatch } from "react-redux";
// import React from "react";
// import {
//   removeCartProduct
//   clearCart,
// } from "../../../toolkit/cartSlice";

// const CartCard = () => {
//   const dispatch = useDispatch();

//   const productItems = useSelector((state) => {
//     console.log("price is");
//     console.log(state.products);
//     return state.cart;
//   });

//   const totalAmount = useSelector((state) => state.cart.totalAmount);

//   const handleRemoveItem = (product) => {
//     console.log("Delected Product:", product);
//     dispatch(removeProduct(product));
//   };

//   const handleEmptyCart = () => {
//     dispatch(clearCart());
//   };

//   const handleTotalAmount = () => {
//     dispatch(getProductsAmount());
//   };

//   return (
//     <TableContainer>
//       <Button onClick={() => handleEmptyCart()}>empty cart</Button>
//       <Button onClick={handleTotalAmount}>total amount</Button>
//       {totalAmount ? <p>{totalAmount}</p> : <p>no amount found</p>}
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Product</Th>
//             <Th>Price</Th>
//             <Th>Quantity</Th>
//             <Th>Total</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {productItems?.map((item) => {
//             return (
//               <Tr
//                 key={item.id}
//                 justifyContent="center"
//                 alignItems="center"
//                 textAlign="center"
//                 maxW="500px"
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 overflow="hidden"
//               >
//                 <Td w="50%" border="1px solid gray">
//                   <Flex>
//                     <Image
//                       src={item.image}
//                       alt="candles"
//                       bg="gray.100"
//                       w={{ base: "50%", md: "30%" }}
//                     />
//                     <Stack mt="2" spacing="3" p="2">
//                       <Heading fontSize={{ base: "12px", md: "sm" }}>
//                         {item.title}
//                       </Heading>
//                       <Button
//                         onClick={() => handleRemoveItem(item.id)}
//                         size={{ base: "xs", md: "sm" }}
//                       >
//                         Remove
//                       </Button>
//                     </Stack>
//                   </Flex>
//                 </Td>
//                 <Td
//                   display={{ base: "none", md: "table-cell" }}
//                   border="1px solid gray"
//                 >
//                   <Text fontSize="sm">${item.price} </Text>
//                 </Td>
//                 <Td border="1px solid gray">
//                   <Text fontSize="sm">
//                     <Quantity />
//                   </Text>
//                 </Td>
//                 <Td border="1px solid gray">
//                   <Text fontSize="sm">{item.price}</Text>
//                 </Td>
//               </Tr>
//             );
//           })}
//         </Tbody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CartCard;

// useEffect(()=>{
//   const cartItems = localStorage.getItem("cart");
//   const items = cartItems ? JSON.parse(cartItems) : [];
//   setCartItems(items);
// },[])
