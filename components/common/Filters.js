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
    Select,
    HStack,
    
  } from "@chakra-ui/react";
import { DragHandleIcon , TriangleDownIcon } from '@chakra-ui/icons'

const Filters = () => {
  return (
    <Container bg='gray.100' maxW='100vw' position='sticky' top='0' zIndex='99'>
            <Flex  p={{base:'2', md:'5'}} justifyContent='space-between'>
            <HStack >
                <IconButton
                  fontSize={{base:'mg', md:'sm'}}
                  icon={<Box ><DragHandleIcon /></Box>}
                ></IconButton>  
                 <IconButton
                  fontSize={{base:'mg', md:'sm'}}
                  icon={<Box ><DragHandleIcon /></Box>}
                ></IconButton>  
                 <IconButton
                  fontSize={{base:'mg', md:'sm'}}
                  icon={<Box ><DragHandleIcon /></Box>}
                ></IconButton>   
                <Text>| Showing 1–16 of 32 results </Text>
            </HStack>
          
                <Box>
                <HStack textAlign='center' display='flex' gap='3'>
                    <Text>Show</Text>
                    <Stack spacing={3}>
                      <Select placeholder='8' size='sm'>
                        <option>16</option>  
                        <option>All</option>  
                      </Select> 
                    </Stack>
                    <Text>Sort by</Text>
                    <Stack spacing={3}>
                      <Select placeholder='Featured' size='sm'>
                        <option>Price Low to High</option>  
                        <option>Price High to Low</option>  
                      </Select> 
                    </Stack>
                   
                    
                </HStack>
                </Box>
               
            </Flex>
           
    </Container>

  )
}

export default Filters