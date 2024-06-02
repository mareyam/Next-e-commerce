import React, { useState, useEffect } from "react";
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
  Select,
  Link
} from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import { addProduct, removeProduct } from "../../../toolkit/checkoutSlice";
import { addProductToCheckout } from "../../../toolkit/cartSlice";
import useCart from "../../../hooks/useCart";
import useTotalPrice from "../../../hooks/useTotalPrice";
import useTotalProducts from "../../../hooks/useTotalProducts";
import Quantity from "../../common/Quantity";
import styles from '../../../styles/cartItems.module.css'
import { DragHandleIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'



const CartItems = () => {
  const dispatch = useDispatch();
  const { handleRemoveItem, handleEmptyCart } = useCart();
  
  const productItems = useSelector((state) => {
    return state.cart;
  });
  const totalPrice = useTotalPrice(productItems);
  const totalProducts = useTotalProducts(productItems);

  console.log('price is'+totalPrice);
  console.log('total prodducts is'+totalProducts);

  const handleToCheckout = (product) => {
    console.log("Added Product:", product.title);
    dispatch(addProduct(product));
    dispatch(addProductToCheckout(product.id));

    console.log("value of addProductToCheckout in test" + product.isChecked);
  };

    useEffect(() => {
  
    }, [productItems]);
  return (
    <Container maxW='container.lg'  marginBottom='5'> 
      <Flex justifyContent='space-between' display={{base:'block', md:'flex'}}>      
          <TableContainer  w={{base:'100%', md:'100%'}} h='400px' overflowY='auto'>
            <Table variant="simple">
              <Thead position='sticky' top='0' zIndex='97' backgroundColor='white'>
                <Tr>
                  <Th>Product</Th>

                  <Th color={{base:'white', md:'black'}}>Quantity</Th>
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
                      {/* <Td>
                        <Button as="checkbox" onClick={() => handleToCheckout(item)}>
                          Add
                        </Button>
                      </Td> */}
                      <Td w="50%">
                        <Flex>
                          <Image
                            src={item.image}
                            alt={item.id}
                            bg="gray.100"
                            w={{ base: "100%", md: "40%" }}
                          />
                          <Stack mt="2" spacing="3" p="2">
                            <Heading
                              fontSize={{ base: "12px", md: "sm" }}
                              w="30px"
                            >
                              {item.title}
                            </Heading>
                            <Text fontSize="sm">${item.price} </Text>
                            <Box display={{ base: "none", md: "show" }}>
                              <Quantity />
                            </Box>
                            <IconButton
                              w="auto"
                              isRound={true}
                              backgroundColor="gray.100"
                              icon={
                                <Box>
                                  <CloseIcon fontSize="7px" />
                                </Box>
                              }
                              size={{ base: "xs", md: "xs" }}
                              onClick={() => handleRemoveItem(item.id)}
                            ></IconButton>
                          </Stack>
                        </Flex>
                      </Td>

                      <Td display={{ base: "show", md: "hide" }}>
                        <Quantity />
                      </Td>

                      <Td>
                        <Text fontSize="sm">${item.price}</Text>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
            </TableContainer>

            <Box textAlign='center' marginLeft={{base:'0%',md:'10'}} h='300px'  w={{base:'100%', md:'40%'}} bg='gray.100'>
            <Heading  className={styles.cart}>Cart Total</Heading>
            <Box className={styles.checkout}>
            <Text className={styles.amount}>Total Amount: <span>${totalPrice}</span></Text>
            <Text className={styles.product_count}>Total Products: <span>{totalProducts}</span></Text>

            {totalProducts === 0 ? (
              <Text fontWeight='bold'>No products to checkout</Text>
            ) : (
              <Link as={NextLink} href='/checkout'>
                <Button className={styles.checkout_button}>Checkout</Button>
              </Link>
            )}
              </Box>
            </Box>
        </Flex>   
      </Container>  



  );
};
export default CartItems;





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
