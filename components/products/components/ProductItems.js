import React, { useState } from "react";
import {
  Icon, 
  CheckIcon,
  IconButton,
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
import { useProducts } from "../../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../../../toolkit/cartSlice";

const ProductsItems = ({ itemSplice }) => {
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
        {data?.slice(0, itemSplice).map((item) => (
          <Box
            key={item.id}
            boxSize="250px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            border="2px solid red"
            backgroundSize="cover"
            backgroundPosition="center"
            bgImage={item.image}
          >
            <Box border='2px solid' marginTop='60%'  flexDirection= 'column'  justifyContent= 'flex-end'>
              <Stack mt="2" spacing="3" p="2">
                <Flex justifyContent='space-between'><Text color="green.600" fontSize="sm">
                  ${item.price}
                </Text>
                <IconButton
                  w='auto'
                  isRound={true}
                  onClick={() => handleAddToCart(item)}
                  backgroundColor="gray.300"
                  icon={<Box>&#128722;</Box>}
                ></IconButton></Flex>
                <Heading overflow="hidden" size="xs" isTruncated>
                  {item.title}
                </Heading>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductsItems;

// setSelectedProduct((prevProducts) => [...prevProducts, product]);
{
  /* {selectedProduct? <CartItem cartitem={selectedProduct} />:<></>} */
}

// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   SimpleGrid,
//   Box,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Divider,
// } from "@chakra-ui/react";
// import { useProducts } from "../../../hooks/useProducts";
// import { useSelector, useDispatch } from "react-redux";
// import { addCartProduct } from "../../../toolkit/cartSlice";
// import CartItem from "../../cart/components/CartItem";

// function ProductItems({ showAddToCart }) {
//   const { data } = useProducts();
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     console.log("Selected Product:", product.title);
//     dispatch(addCartProduct(product));
//   };

//   return (
//     <Container maxW="container.lg" border="2px solid">
//       <Box textAlign="center">
//         <Heading as="h4">Products</Heading>
//         <Text fontSize="12px">Order it for you or for your beloved ones</Text>
//       </Box>
//       <SimpleGrid columns={{ base: 2, md: 4 }} spacing="2">
//         {data?.map((item) => (
//           <Box
//             key={item.id}
//             maxW="250px"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//           >
//             <Box>
//               <Image src={item.image} alt="candles" bg="gray.100" w="100%" />
//               <Stack mt="2" spacing="3" p="2">
//                 <Heading overflow="hidden" size="xs" isTruncated>
//                   {item.title}
//                 </Heading>
//                 <Text color="green.600" fontSize="sm">
//                   ${item.price}
//                 </Text>
//                 {showAddToCart && (
//                   <Button onClick={() => handleAddToCart(item)}>
//                     Add to Cart
//                   </Button>
//                 )}
//               </Stack>
//             </Box>
//             <Divider />
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Container>
//   );
// }

// export default ProductItems;

// setSelectedProduct((prevProducts) => [...prevProducts, product]);
{
  /* {selectedProduct? <CartItem cartitem={selectedProduct} />:<></>} */
}
