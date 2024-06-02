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
  Flex,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import useCheckout from "../../../hooks/useCheckOut";
import { addProduct } from "../../../toolkit/checkoutSlice";
import Products from "../../../pages/api/data/products";

const CheckoutProducts = () => {
  // const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart);
  // const itemsToCheckout = cartItems.filter((item) => !item.isChecked);
  const dispatch = useDispatch();

  const productItems = useSelector((state) => {
    console.log(state);
    return state.cart;
  });

  return (
    <Container
      maxW="container.xl"
      className="container"
      marginTop="10"
      marginBottom="5"
    >
      <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box w={{ base: "100%", md: "45%" }}>
          <Form />
        </Box>
        <Box w={{ base: "100%", md: "55%" }}>
          <Flex justifyContent="space-between">
            <Box>
              <Heading fontSize={{ base: "md", md: "2xl" }}>Products</Heading>
            </Box>
            <Box>
              <Heading fontSize={{ base: "md", md: "2xl" }}>SubTotal</Heading>
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Box w="100%" overflowY="auto">
              {productItems?.map((item, index) => (
                <Box key={index} marginBottom="2">
                  <Flex justifyContent="space-between">
                    <Flex>
                      <Image
                        src={item.image}
                        alt={item.id}
                        bg="gray.100"
                        w={{ base: "100px", md: "150px" }}
                        h={{ base: "100px", md: "150px" }}
                      />
                      <Stack spacing="3" p="2" justifyContent="center">
                        <Heading
                          fontFamily="Gruppo"
                          fontSize={{ base: "12px", md: "lg" }}
                        >
                          {item.title}
                        </Heading>
                        <Text
                          fontSize={{ base: "12px", md: "lg" }}
                          color="green.400"
                          fontFamily="Gruppo"
                          fontWeight="700"
                        >
                          Id: #{item.price}
                        </Text>
                      </Stack>
                    </Flex>
                    <Box display="flex" alignItems="center">
                      <Text
                        fontSize={{ base: "12px", md: "lg" }}
                        color="green.400"
                      >
                        ${item.price}.00
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default CheckoutProducts;

//   <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap">
// <Box w={{ base: "100%", md: "40%" }}>
//   <SimpleGrid
//     columns={{ base: 1, md: 1 }}
//     spacing="2"
//     border="2px solid red"
//   >
//     {itemsToCheckout?.map((item) => (
//       <Box
//         key={item.id}
//         border="2px solid green"
//         maxW="100%"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//       >
//         <Flex>
//           <Image
//             src={item.image}
//             alt="candles"
//             bg="gray.100"
//             w={{ base: "50%", md: "50%" }}
//             h={{ base: "50%", md: "100%" }}
//           />
//           <Stack mt="2" spacing="3" p="2">
//             <Heading fontSize={{ base: "12px", md: "lg" }}>
//               {item.title}
//             </Heading>
//             <Text
//               fontSize={{ base: "12px", md: "md" }}
//               color="green.400"
//             >
//               {item.price}
//             </Text>
//           </Stack>
//         </Flex>
//         <Divider />
//       </Box>
//     ))}
//   </SimpleGrid>
// </Box>
//     <Box border="2px solid" w={{ base: "100%", md: "60%" }}>
//       <Form />
//     </Box>
//   </Flex>
// </Container>

// import React, { useEffect } from "react";
// import {
//   SimpleGrid,
//   Box,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Divider,
//   Flex,
// } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart);
//   return (
//     <Box marginTop={{ base: 0, md: 2 }}>
//       <SimpleGrid columns={{ base: 1, md: 1 }} spacing="2">
//         {cartItems?.map((item) => (
//           <Box
//             key={item.id}
//             maxW="100%"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             m={{ base: 2, md: 0 }}
//           >
//             <Flex>
//               <Image
//                 src={item.image}
//                 alt="candles"
//                 bg="gray.100"
//                 w={{ base: "50%", md: "50%" }}
//                 h={{ base: "50%", md: "100%" }}
//               />
//               <Stack mt="2" spacing="3" p="2">
//                 <Heading fontSize={{ base: "12px", md: "lg" }}>
//                   {item.title}
//                 </Heading>
//                 <Text fontSize={{ base: "12px", md: "md" }} color="green.400">
//                   {item.price}
//                 </Text>
//               </Stack>
//             </Flex>
//             <Divider />
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };
// export default Checkout;
