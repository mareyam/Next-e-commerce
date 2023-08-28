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
    <Container maxW='container.3xl' style={{marginBottom:'2%'}}>
    <Center  textAlign="center" bgImage='/bg-image.png' h={{base:'100%',md:'100px'}} align='center'>
      <Stack>
      <Heading as="h4">Cart</Heading>
      <Text fontSize="12px">Checkout now for you or for your beloved ones</Text>
      </Stack>
    </Center>
  </Container>
  )
}

export default Header