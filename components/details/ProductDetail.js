import React, {useState} from 'react'
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
  HStack
} from "@chakra-ui/react";
import Quantity from '../common/Quantity'

const ProductDetail = () => {
  const [sizeToggle, setSizeToggle] = useState(false);
  const handleSizeToggle = () => {
    setSizeToggle(!sizeToggle)
  }
  return (
    <Box w={{base:'100%', md:'50%'}} padding='5'>
      <Heading fontWeight='medium'>Asgaard sofa</Heading>
      <Text fontSize={{base:'md', md:'xl'}} color='gray' >$ 250.00</Text>
      <Text fontSize={{base:'sm', md:'md'}}>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</Text>
      <Text marginTop='3' color='gray'>Size</Text>
      <HStack>
        <Button onClick={handleSizeToggle} w='auto' backgroundColor={sizeToggle? 'black':'white'} color={sizeToggle? 'white':'black'} border='1px solid'>S</Button>
        <Button onClick={handleSizeToggle} w='auto' backgroundColor={sizeToggle? 'black':'white'} color={sizeToggle? 'white':'black'} border='1px solid'>M</Button>
        <Button onClick={handleSizeToggle} w='auto' backgroundColor={sizeToggle? 'black':'white'} color={sizeToggle? 'white':'black'} border='1px solid'>L</Button>
      </HStack>
      <Text marginTop='3'color='gray'>Color</Text>
      <HStack>
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='red'
          aria-label='Done'
          fontSize='20px'
        />
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='blue'
          aria-label='Done'
          fontSize='20px'
        />
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='gray'
          aria-label='Done'
          fontSize='20px'
        />
      </HStack>
      <HStack marginTop='3'>
      <Box w='150px'><Quantity/></Box>
      <Button backgroundColor='white' border='1px solid'>ATC</Button>
      <Button backgroundColor='white' border='1px solid'>Compare</Button>
      </HStack>
    </Box>
  )
}

export default ProductDetail