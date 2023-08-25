import React from "react";
import {
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
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../toolkit/checkoutSlice";
import {
  addProductToCheckout,
  removeCartProduct,
  clearCart,
} from "../../toolkit/cartSlice";

const CartTest = () => {
  const dispatch = useDispatch();

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
    <TableContainer>
      {/* <Button onClick={handleEmptyCart}>empty cart</Button> */}
      {/* <p>total price is: ${totalPrice}</p> */}
      {/* <p>total products are: {totalProducts}</p> */}

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
                <Td>
                  <Button onClick={() => handleToCheckout(item)}>Add</Button>
                  <p>
                    ischecked {item?.isChecked ? "true" : "false"} for{" "}
                    {item?.id}{" "}
                  </p>
                </Td>
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
                        // onClick={() => handleRemoveItem(item.id)}
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
                  <Text fontSize="sm"></Text>
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

    // <Box>
    //   <Heading>Cart Items </Heading>
    //   {productItems?.map((item) => {
    //     return (
    //       <Box>
    //         <p>{item?.title}</p>
    //       </Box>
    //     );
    //   })}
    // </Box>
  );
};
export default CartTest;

// import { useState, useEffect, useMemo } from "react";
// import {
//   Checkbox,
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
//   addProductToCheckout,
//   // removeCartProduct,
//   // clearCart,
// } from "../../toolkit/cartSlice";
// import useCart from "../../hooks/useCart";
// // import useTotalPrice from "../../hooks/useTotalPrice";
// // import useTotalProducts from "../../hooks/useTotalProducts";
// import { addProduct, removeProduct } from "../../toolkit/checkoutSlice";

// const CartTest = () => {
//   // const { handleRemoveItem, handleEmptyCart } = useCart();
//   const dispatch = useDispatch();
//   const productItems = useSelector((state) => {
//     return state.cart;
//   });

//   const handleToCheckout = (checked, product) => {
//     console.log("Added Product:", product.title);
//     dispatch(addProduct(product));
//     console.log("value of addProductToCheckout is" + product.isChecked);
//   };

//   // const totalPrice = useTotalPrice(productItems);
//   // const totalProducts = useTotalProducts(productItems);

//   return (
//     <TableContainer>
//       {/* <Button onClick={handleEmptyCart}>empty cart</Button> */}
//       {/* <p>total price is: ${totalPrice}</p> */}
//       {/* <p>total products are: {totalProducts}</p> */}

//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Checkout</Th>
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
//                 {/* <p>isChecked: {item.isChecked ? "true" : "false"}</p> */}
//                 <Td>
//                   <Checkbox
//                     // isChecked={item.isChecked}
//                     onChange={() => handleToCheckout(item)}
//                   />
//                 </Td>
//                 <Td w="50%" border="2px solid">
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
//                         // onClick={() => handleRemoveItem(item.id)}
//                         size={{ base: "xs", md: "sm" }}
//                       >
//                         Remove
//                       </Button>
//                     </Stack>
//                   </Flex>
//                 </Td>
//                 <Td
//                   display={{ base: "none", md: "table-cell" }}
//                   border="2px solid"
//                 >
//                   <Text fontSize="sm">${item.price} </Text>
//                 </Td>
//                 <Td border="2px solid">
//                   <Text fontSize="sm">
//                     <Quantity />
//                   </Text>
//                 </Td>
//                 <Td border="2px solid">
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

// export default CartTest;

// const Quantity = () => {
//   const [quantity, setQuantity] = useState(0);
//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };
//   const handleDecrement = () => {
//     setQuantity(quantity - 1);
//   };
//   const handleInput = (value) => {
//     setQuantity(quantity + value);
//   };
//   return (
//     <HStack maxW="320px">
//       <Button onClick={handleIncrement}>+</Button>
//       <Input onClick={handleInput} />
//       <Button onClick={handleDecrement}>-</Button>
//     </HStack>
//   );
// };

// const handleToCheckout = (checked, product) => {
//   if (!product.isChecked) {
//     console.log("Added Product:", product.title);
//     dispatch(addProduct({ ...product, isChecked: true }));
//     dispatch(addProductToCheckout(product));
//     console.log("value of addProductToCheckout is" + product.isChecked);
//     setChecked(checked);
//   } else {
//     console.log("removed Product:", product.title);
//     dispatch(removeProduct(product));
//     setChecked(checked);
//   }
// };
