import React, { useState } from "react";
import {
  Container,  
} from "@chakra-ui/react";
import { useProducts } from "../../../hooks/useProducts";
import { useDispatch } from "react-redux";
import GridView from '../../GridView.js';
import GalleryView from '../../GalleryView.js';


const ProductsItems = ({productsView, sort, count}) => {
  console.log("sort in ProductItems is"+sort);

  return (
    <Container maxW='container.lg' marginBottom='3%'>

      {productsView === 'gallery' ? <GalleryView sort={sort} count={count}/> : <GridView sort={sort} count={count}/> }
    
      </Container>
  );
};

export default ProductsItems;

// const handleAddToCart = (product) => {
//   console.log("Selected Product:", product.title);
//   dispatch(addCartProduct(product));
// };  
// const handleMouseEnter = (id) => {
//   setToggleHover(id);
// };

// const handleMouseLeave = () => {
//   setToggleHover(null);
// };



      {/* <SimpleGrid my='2' columns={{ base: 1, md: 4 }} spacing="5">
        {data?.map((item) => (
          <Box
            key={item.id}
            boxSize="300px"
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            backgroundSize="cover"
            backgroundPosition="center"
            bgImage={item.image}
            position="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            style={{alignItems: 'end', display:'flex'}}
            role='group'
            
           
          >
            <Box w='100%'>
          <Box>
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
              opacity='0'
              _groupHover={{opacity:'1'}}
              transition='all 0.5s ease'
            >
              <Center textAlign='center'>
              <Stack align='center'>
              <Heading fontSize='md' color='white' p='2'>{item.details}</Heading>
         </Stack>
         </Center>
        </Box>
      </Box>

      
              <Stack spacing="0" p="2"  
               borderColor="var(--transparent-color, rgba(216, 216, 216, 0.00))"
               bgGradient="linear(to bottom, rgba(18, 18, 18, 0.00) 0%, #121212 100%)"
              >
               <Heading color='gray.100' overflow="hidden" size="sm" isTruncated>
                  {item.title}
                </Heading>
                <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize="sm" color='white'>
                  Price: ${item.price}
                </Text>
                <IconButton
                  w='auto'
                  isRound={true}
                  onClick={() => handleAddToCart(item)}
                  backgroundColor="gray.100"
                  icon={<Box>&#128722;</Box>}
                ></IconButton></Flex>
                
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid> */}

      





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
//     <Container maxW="container.lg" >
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
