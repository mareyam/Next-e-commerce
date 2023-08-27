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
  } from "@chakra-ui/react";
import { DragHandleIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const [toggleHam, setToggleHam] = useState(false)
  return (
    <Container bg='gray.100' maxW='100vw' position='sticky' top='0' zIndex='99'>
            <Flex align='center' p={{base:'2', md:'5'}} justifyContent='space-between'>
                <Heading>Logo</Heading>

                <Box display={{base:'block', md:'none'}}>
                <IconButton
                  transition= 'all 0.3s ease-out'
                  w='50px'
                  transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
                  fontSize={{base:'xl', md:'2xl'}}
                  icon={<Box ><DragHandleIcon /></Box>}
                  onClick={() => setToggleHam(!toggleHam)}
                ></IconButton>
                </Box>
                
                <Box display={{base:'none', md:'block'}}>
                <Box position='relative' display={{base:'block', md:'flex'}} justifyContent='space-around' gap='3'>
                    <Text>Home</Text>
                    <Text>Products</Text>
                    <Text>Cart</Text>
                </Box>
                </Box>
               
            </Flex>
            {toggleHam &&
            <Box display={{base:'block', md:'none'}}  right='0' bg='white' zIndex='1' position='absolute' h='150px' w='150px'>
                    <Stack spacing='5'>
                        <Text>Home</Text>
                        <Text>Products</Text>
                        <Text>Cart</Text>
                    </Stack>
            </Box>}
    </Container>
   
  )
}

export default Navbar