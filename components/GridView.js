//one view to display items
import React, {useState} from "react";
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
import { useDispatch } from "react-redux";
import { addCartProduct } from "../toolkit/cartSlice";
import { useProducts } from "../hooks/useProducts";

const GridView = ({sort, count}) =>{
  const { data } = useProducts();


  // console.log("Data in GridView is"+data.price)
  console.log("Sort in GridView is"+sort)
  console.log("Count in GridView is"+count)
  
  
  let sortedItems = data;

  if (sort === 'low') {
    sortedItems.sort((a, b) => a.price - b.price); 
    console.log("sorted items are low")
    console.log(sortedItems.price)
    
  } else if (sort === 'high') {
    sortedItems.sort((a, b) => b.price - a.price);
    console.log("sorted items are high")
    console.log(sortedItems.price)
  }

  const sliceValue = 0;
  if(count == '4') {
    sliceValue=4;
  } else if (count == '8') {
    sliceValue=8;
  }else sliceValue=100;

    const dispatch = useDispatch();
    const [toggleHover, setToggleHover] = useState(null);
    const handleAddToCart = (product) => {
        console.log("Selected Product:", product.title);
        dispatch(addCartProduct(product));
      };  
      const handleMouseEnter = (id) => {
        setToggleHover(id);
      };
    
      const handleMouseLeave = () => {
        setToggleHover(null);
      };

      

      return (
    <SimpleGrid my='2' columns={{ base: 1, md: 4 }} spacing="5">

        {sortedItems.slice(0,sliceValue)?.map((item) => (
          <Box
            key={item.id}
            boxSize="300px"
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            backgroundSize="cover"
            backgroundPosition="center"
            bgImage={item.image}
            position="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            style={{alignItems: 'end', display:'flex'}}
            role='group'
          >    
            <Box w='100%'>
          <Box>
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0, 0, 0, 0.6)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              opacity='0'
              _groupHover={{opacity:'1'}}
              transition='all 0.5s ease'
            >
              <Center textAlign='center'>
              <Stack align='center'>
              <Heading fontSize='md' color='white' p='2'>{item.details}</Heading>
         </Stack>
         </Center>
        </Box>
      </Box>

      
              <Stack spacing="0" p="2"  
               borderColor="var(--transparent-color, rgba(216, 216, 216, 0.00))"
               bgGradient="linear(to bottom, rgba(18, 18, 18, 0.00) 0%, #121212 100%)"
              >
               <Heading color='gray.100' overflow="hidden" size="sm" isTruncated>
                  {item.title}
                </Heading>
                <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize="sm" color='white'>
                  Price: ${item.price}
                </Text>
                <IconButton
                  w='auto'
                  isRound={true}
                  onClick={() => handleAddToCart(item)}
                  backgroundColor="gray.100"
                  icon={<Box>&#128722;</Box>}
                ></IconButton></Flex>
                
              </Stack>
            </Box>      
          </Box>
        ))}
      </SimpleGrid>
      )
}
export default GridView