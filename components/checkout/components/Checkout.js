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
import Form from "../../checkout/components/Form";
import useCheckout from "../../../hooks/useCheckOut";
import { addProduct } from "../../../toolkit/checkoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const itemsToCheckout = cartItems.filter((item) => !item.isChecked);

  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Heading as="h4">Checkout</Heading>
        <Text fontSize="12px">Buy your favourite items now</Text>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box w={{ base: "100%", md: "40%" }}>
          <SimpleGrid
            columns={{ base: 1, md: 1 }}
            spacing="2"
            border="2px solid red"
          >
            {itemsToCheckout?.map((item) => (
              <Box
                key={item.id}
                border="2px solid green"
                maxW="100%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Flex>
                  <Image
                    src={item.image}
                    alt="candles"
                    bg="gray.100"
                    w={{ base: "50%", md: "50%" }}
                    h={{ base: "50%", md: "100%" }}
                  />
                  <Stack mt="2" spacing="3" p="2">
                    <Heading fontSize={{ base: "12px", md: "lg" }}>
                      {item.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "12px", md: "md" }}
                      color="green.400"
                    >
                      {item.price}
                    </Text>
                  </Stack>
                </Flex>
                <Divider />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box border="2px solid" w={{ base: "100%", md: "60%" }}>
          <Form />
        </Box>
      </Flex>
    </Container>
  );
};

export default Checkout;

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
