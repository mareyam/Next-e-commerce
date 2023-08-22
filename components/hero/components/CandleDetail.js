import React from "react";
import {Button, Spacer, Container, Image,Box, List, MdCheckCircle,  Heading, Text, ListItem, ListIcon, Flex,} from "@chakra-ui/react";

const CandleDetail = () => {
   
  return (
    <Container maxW='container.lg' display={{base:'block', md:'flex'}} border='2px solid' >
     <Flex justifyContent='center' alignItems='center'>
        <Container p='20'>
            <Heading fontSize='25px'>Clean and fragrant soy wax</Heading>
            <Text marginTop='2' fontSize='12px' color='green.600'>Made for your home and for your wellness</Text>
            <List marginTop='5'>
            {list.map((item) => {
                return(
                <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                <span fontWeight='900'>{item.title}: </span>
                {item.description}
            </ListItem>
            )})}
            </List>
            <Button marginTop='5' w='50%' color='white' bg='green.300'>Learn More</Button>
        </Container>
        <Spacer />
        <Box>
        <Image
            width='500px'
            height='300px'
            objectFit='cover'
            src={'/image 1-1.png'}
            alt='candle'
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default CandleDetail;


const list = [
    {
      title: 'Eco-sustainable',
      description: 'All recyclable materials, 0% CO2 emissions'
    },
    {
      title: 'Eco-sustainable',
      description: 'All recyclable materials, 0% CO2 emissions'
    },
    {
        title: 'Eco-sustainable',
        description: 'All recyclable materials, 0% CO2 emissions'
     },
     {
        title: 'Eco-sustainable',
        description: 'All recyclable materials, 0% CO2 emissions'
     }
  ];