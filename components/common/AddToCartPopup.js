import React from 'react';
import {
  HStack, Stack, NextLink, Link, VStack, Heading, Text, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Button, IconButton, Box, Image
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import useCart from '../../hooks/useCart';
import { CloseIcon } from '@chakra-ui/icons';
import useTotalPrice from '../../hooks/useTotalPrice';

const AddToCartPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleRemoveItem, handleEmptyCart } = useCart();


  const productItems = useSelector((state) => {
    // console.log("state in popup");
    return state.cart;
  });
  const totalPrice = useTotalPrice(productItems);


  return (
    <>
      <IconButton
        w='auto'
        isRound={true}
        onClick={onOpen}
        backgroundColor="gray.100"
        icon={<Image src={'/shopping-cart.png'} w='20px' h='20px' />}
      ></IconButton>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxH='100vh'>
          <DrawerHeader borderBottomWidth='1px' >
            <Box justifyContent='space-between' display='flex' flexDirection='row'>
              Cart
              <IconButton
              w='auto'
              isRound={true}
              onClick={onClose}
              backgroundColor="gray.100"
              icon={<Image src={'/close-cart.png'} w='20px' h='20px' />}
            ></IconButton>
             </Box> 
            
              </DrawerHeader>
          <DrawerBody maxH='75vh'>
            {productItems?.map((item) => (
              <HStack key={item.id}  marginTop='2%' align='flex-start'> 
                <Image
                  src={item.image}
                  alt="candles"
                  bg="gray.100"
                  borderRadius='10%'
                  objectFit='cover'
                  minW={{ base: '100px', md: '100px' }}
                  h={{ base: '100px', md: '100px' }}
                  
                />
                <Stack top='0'>
                  <Text fontSize='sm'>{item.title}</Text>
                  <Text fontSize='xs'>$.{item.price}.00</Text>
                </Stack>
                <Stack>
                  <IconButton
                    w='auto'
                    isRound={true}
                    backgroundColor="gray.100"
                    icon={<Box><CloseIcon fontSize='7px' /></Box>}
                    size={{ base: "xs", md: "xs" }}
                    onClick={() => handleRemoveItem(item.id)}
                  ></IconButton>
                </Stack>
              </HStack>
            ))}
          </DrawerBody>
          <hr/>
          <DrawerBody display="flex"  flexDirection="column" maxH='15vh' justifyContent='space-between'>
            <HStack justifyContent='space-between'>
              <Text fontSize='md' fontWeight='bold'>Subtotal</Text>
              <Text fontSize='md' color='gray.600'>${totalPrice}.00</Text>
            </HStack>
            <hr/>
            <HStack justifyContent='space-between'>
             <Link as={NextLink} href='/cart'>
              <Button fontSize='sm' w='100px' h='auto' bg='white' color='black' border='1px solid'>Cart</Button>
            </Link>
             <Link as={NextLink} href='/checkout'>
              <Button fontSize='sm' w='100px' h='auto' bg='white' color='black' border='1px solid'>Checkout</Button>
            </Link>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default AddToCartPopup;

// import React from 'react'
// import {
//     HStack, Stack, VStack, Heading, Text, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,useDisclosure, Button,IconButton, Box, 
//   } from '@chakra-ui/react'
// import { useSelector } from "react-redux";
// import useCart from '../../hooks/useCart';
// import { CloseIcon } from '@chakra-ui/icons'

// const AddToCartPopup = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const { handleRemoveItem, handleEmptyCart } = useCart();

//       const productItems = useSelector((state) => {
//         console.log("state in popup");
//         console.log(state);
//     return state.cart;
//   });
  
//     return (
//       <>
//         <IconButton
//                   w='auto'
//                   isRound={true}
//                   onClick={onOpen}
//                   backgroundColor="gray.100"
//                   icon={<Box>&#128722;</Box>}
//                 ></IconButton>
//         <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerHeader borderBottomWidth='1px'>Cart</DrawerHeader>
//             <DrawerBody>
//               {productItems?.map((item) => {
//                 return (
//                 <HStack>
//                           <Image
//                             src={item.image}
//                             alt="candles"
//                             bg="gray.100"
//                             w={{ base: "100%", md: "40%" }}
//                           />
//                           <Stack>
//                             <Text>{item.title}</Text>
//                             <Text>{item.price}</Text>
//                           </Stack>
//                            <Stack>
//                             <IconButton
//                               w='auto'
//                               isRound={true}
//                               backgroundColor="gray.100"
//                               icon={<Box><CloseIcon fontSize='7px'/></Box>}
//                               size={{ base: "xs", md: "xs" }}
//                               onClick={() => handleRemoveItem(item.id)}
//                             ></IconButton>
//                           </Stack>
//                 </HStack>)})}
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//       </>
//     )
//   }
// export default AddToCartPopup;