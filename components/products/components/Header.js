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
import Filters from '../../common/Filters'

const Header = () => {
  return (
    <Container maxW='container.3xl'>
    <Center  backgroundPosition='center'  backgroundSize="cover" textAlign="center" bgImage='/background.png' h={{base:'100%',md:'100px'}} align='center'>
      <Stack>
      <Heading as="h4">Products</Heading>
      <Text fontSize="12px">Order it for you or for your beloved ones</Text>
      </Stack>
    </Center>
    <Filters/>
  </Container>
  )
}

export default Header