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
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAddToCart = (product) => {
    console.log("Selected Product:", product.title);
    dispatch(addCartProduct(product));
  };  
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };


  return (
    <Container maxW="container.lg" border="2px solid">
      <Box textAlign="center">
        <Heading as="h4">Products</Heading>
        <Text fontSize="12px">Order it for you or for your beloved ones</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing="2">
        {data?.slice(0, itemSplice).map((item) => (
          <Box
            key={item.id}
            // boxSize="250px"
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            border="2px solid red"
            backgroundSize="cover"
            backgroundPosition="center"
            bgImage={item.image}
            position="relative"
            onMouseEnter={toggleOverlay}
            onMouseLeave={toggleOverlay}
          >
            <Box border='2px solid' marginTop='50%'  flexDirection= 'column'  justifyContent= 'flex-end'>
            {showOverlay && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button colorScheme="green" size="sm" onClick={() => console.log("item")}>
            Add to Cart
          </Button>
          <Button colorScheme="green" size="sm" onClick={() => setButton(!button)}>
            X
          </Button>
          
        </Box>
      )}

      
              <Stack mt="2" spacing="5" p="2">
               <Heading overflow="hidden" size="sm" isTruncated>
                  {item.title}
                </Heading>
                <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize="sm">
                  Price: ${item.price}
                </Text>
                <IconButton
                  w='auto'
                  isRound={true}
                  onClick={() => handleAddToCart(item)}
                  backgroundColor="gray.300"
                  icon={<Box>&#128722;</Box>}
                ></IconButton></Flex>
                
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
