import React from 'react'
import {
    Center, 
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


const Header = () => {
  return (
    <Container marginBottom='5' maxW='container.3xl'>
      <Center backgroundPosition='center'  backgroundSize="cover" textAlign="center" bgImage='/background.png' h={{base:'100%',md:'100px'}} align='center'>
      <Stack>
      <Heading as="h4">Checkout</Heading>
      <Text fontSize="12px">Checkout it for you or for your beloved ones</Text>
      </Stack>
      </Center>
    </Container>
  )
}

export default Header
// import React from 'react'
// import {
//     Center, 
//     Icon, 
//     CheckIcon,
//     IconButton,
//     Button,
//     Container,
//     SimpleGrid,
//     Box,
//     Image,
//     Stack,
//     Heading,
//     Text,
//     Divider,
//     Flex,
//   } from "@chakra-ui/react";

// const Header = () => {
//   return (
//     <Container maxW='container.3xl'>
//     <Center  textAlign="center" bgImage='/background.png' h={{base:'100%',md:'100px'}} align='center'>
//       <Stack>
//       <Heading as="h4">Checkout</Heading>
//       <Text fontSize="12px">Checkout it for you or for your beloved ones</Text>
//       </Stack>
//     </Center>
//   </Container>
//   )
// }

// export default Header