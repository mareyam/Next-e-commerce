import React from 'react'
import CheckoutCard from './CheckoutCard'
import { Spacer, VStack,HStack, Input, Button, Container, SimpleGrid, Box, Image, Stack, Heading, Text, Divider, Flex } from '@chakra-ui/react';


const CheckoutItems = () => {
  return (
    <div>
        <CheckoutCard/>
    <Container maxW='container.lg'>
        
        <Flex><Input placeholder='Coupon code'/><Button bgColor='gray.200'>Add Code</Button></Flex>
        <Spacer/>
        <VStack >
            <HStack  w='100%' justifyContent='space-between'>
                <Heading fontSize='h5'>Subtotal</Heading>
                <Heading fontSize='h5'>$9.99</Heading>
            </HStack>
            <HStack w='100%' justifyContent='space-between'>
                <Heading fontSize='h5'>Shipping</Heading>
                <Heading fontSize='h5'>$2.00</Heading>
            </HStack >
            <HStack w='100%' justifyContent='space-between'>
                <Heading fontSize='lg'>Total</Heading>
                <Heading fontSize="lg">$11.99</Heading>
            </HStack>
        </VStack>
    </Container>
    </div>
  )
}

export default CheckoutItems