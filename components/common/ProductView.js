import React, {useState} from 'react'
import {
    useDisclosure,
    Center, 
    Icon, 
    CheckIcon,
    IconButton,
    Button,
    Container,
    SimpleGrid,
    ScaleFade,
    Box,
    Image,
    Stack,
    Heading,
    HStack,
    Text,
    Divider,
    Flex,
  } from "@chakra-ui/react";
import { useProducts } from '../../hooks/useProducts';
import useView from '../../hooks/useView';



const ProductView = () => {
    const { data } = useProducts();
    const {GridView, GalleryView } = useView();
    const gridView = GridView(data);
    const galleryView = GalleryView(data);

   const [view, setView] = useState('grid');
  
  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <Container bg="gray.100" maxW="100vw" position="sticky" top="0" zIndex="98">
      <Flex
        display={{ base: "block", md: "flex" }}
        p={{ base: "2", md: "5" }}
        justifyContent="space-between"
      >
        <HStack>
          <Box role="group">
            <IconButton
              fontSize={{ base: "12px", md: "sm" }}
              transition="all 0.3s ease-out"
              transform="rotate(0deg)"
              _groupHover={{ transform: "rotate(90deg)" }}
              onClick={() => handleViewChange("grid")}
              icon={
                <Image
                  alt="cart-item"
                  src="/grid.png"
                  w={{ base: "12px", md: "20px" }}
                  h={{ base: "12px", md: "20px" }}
                />
              }
            ></IconButton>
          </Box>

          <Box role="group">
            <IconButton
              fontSize={{ base: "12px", md: "sm" }}
              transition="all 0.3s ease-out"
              transform="rotate(0deg)"
              _groupHover={{ transform: "rotate(90deg)" }}
              onClick={() => handleViewChange("gallery")}
              icon={
                <Image
                  src="/layout.png"
                  alt="cart-item"
                  w={{ base: "12px", md: "20px" }}
                  h={{ base: "12px", md: "20px" }}
                />
              }
            ></IconButton>
          </Box>
        </HStack>
      </Flex>
      {view === "grid" ? gridView : galleryView}

      {/* {view === 'grid' ? <GridView products={data} /> : <GalleryView products={data} />} */}
    </Container>
  );
}

export default ProductView


// const GridView = ({products}) =>{
//     const [toggleHover, setToggleHover] = useState(null);
//     const handleAddToCart = (product) => {
//         console.log("Selected Product:", product.title);
//         dispatch(addCartProduct(product));
//       };  
//       const handleMouseEnter = (id) => {
//         setToggleHover(id);
//       };
    
//       const handleMouseLeave = () => {
//         setToggleHover(null);
//       };

//       return (
//     <SimpleGrid my='2' columns={{ base: 1, md: 4 }} spacing="5">

//         {products?.map((item) => (
//           <Box
//             key={item.id}
//             boxSize="300px"
//             width="100%"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             backgroundSize="cover"
//             backgroundPosition="center"
//             bgImage={item.image}
//             position="relative"
//             onMouseEnter={() => handleMouseEnter(item.id)}
//             onMouseLeave={handleMouseLeave}
//             style={{alignItems: 'end', display:'flex'}}
//             role='group'
//           >    
//             <Box w='100%'>
//           <Box>
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               right="0"
//               bottom="0"
//               bg="rgba(0, 0, 0, 0.6)"
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               opacity='0'
//               _groupHover={{opacity:'1'}}
//               transition='all 0.5s ease'
//             >
//               <Center textAlign='center'>
//               <Stack align='center'>
//               <Heading fontSize='md' color='white' p='2'>{item.details}</Heading>
//          </Stack>
//          </Center>
//         </Box>
//       </Box>

      
//               <Stack spacing="0" p="2"  
//                borderColor="var(--transparent-color, rgba(216, 216, 216, 0.00))"
//                bgGradient="linear(to bottom, rgba(18, 18, 18, 0.00) 0%, #121212 100%)"
//               >
//                <Heading color='gray.100' overflow="hidden" size="sm" isTruncated>
//                   {item.title}
//                 </Heading>
//                 <Flex justifyContent='space-between' alignItems='center'>
//                 <Text fontSize="sm" color='white'>
//                   Price: ${item.price}
//                 </Text>
//                 <IconButton
//                   w='auto'
//                   isRound={true}
//                   onClick={() => handleAddToCart(item)}
//                   backgroundColor="gray.100"
//                   icon={<Box>&#128722;</Box>}
//                 ></IconButton></Flex>
                
//               </Stack>
//             </Box>      
//           </Box>
//         ))}
//       </SimpleGrid>
//       )
// }


// const GalleryView = ({products}) =>{
//     const [toggleHover, setToggleHover] = useState(null);
//     const handleAddToCart = (product) => {
//         console.log("Selected Product:", product.title);
//         dispatch(addCartProduct(product));
//       };  
//       const handleMouseEnter = (id) => {
//         setToggleHover(id);
//       };
    
//       const handleMouseLeave = () => {
//         setToggleHover(null);
//       };

//       return (
//     <SimpleGrid my='2' columns={{ base: 1, md: 2 }} spacing="5">

//         {products?.map((item) => (
//           <Box
//             key={item.id}
//             boxSize="300px"
//             width="100%"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             backgroundSize="cover"
//             backgroundPosition="center"
//             bgImage={item.image}
//             position="relative"
//             onMouseEnter={() => handleMouseEnter(item.id)}
//             onMouseLeave={handleMouseLeave}
//             style={{alignItems: 'end', display:'flex'}}
//             role='group'
//           >    
//             <Box w='100%'>
//           <Box>
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               right="0"
//               bottom="0"
//               bg="rgba(0, 0, 0, 0.6)"
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               opacity='0'
//               _groupHover={{opacity:'1'}}
//               transition='all 0.5s ease'
//             >
//               <Center textAlign='center'>
//               <Stack align='center'>
//               <Heading fontSize='md' color='white' p='2'>{item.details}</Heading>
//          </Stack>
//          </Center>
//         </Box>
//       </Box>

      
//               <Stack spacing="0" p="2"  
//                borderColor="var(--transparent-color, rgba(216, 216, 216, 0.00))"
//                bgGradient="linear(to bottom, rgba(18, 18, 18, 0.00) 0%, #121212 100%)"
//               >
//                <Heading color='gray.100' overflow="hidden" size="sm" isTruncated>
//                   {item.title}
//                 </Heading>
//                 <Flex justifyContent='space-between' alignItems='center'>
//                 <Text fontSize="sm" color='white'>
//                   Price: ${item.price}
//                 </Text>
//                 <IconButton
//                   w='auto'
//                   isRound={true}
//                   onClick={() => handleAddToCart(item)}
//                   backgroundColor="gray.100"
//                   icon={<Box>&#128722;</Box>}
//                 ></IconButton></Flex>
                
//               </Stack>
//             </Box>      
//           </Box>
//         ))}
//       </SimpleGrid>
//       )
// }

