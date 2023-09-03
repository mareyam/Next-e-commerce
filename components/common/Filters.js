import React, {useEffect, useState} from 'react'
import {
    IconButton,
    Container,
    Box,
    Image,
    Stack,
    Text,
    Flex,
    Select,
    HStack, 
  } from "@chakra-ui/react";
  import { useProducts } from '../../hooks/useProducts';
  import useView from '../../hooks/useView';
  import ProductsItems from '../products/components/ProductItems';
  import { useDispatch } from "react-redux";
  import { sortByAscending, sortByDescending }  from '../../toolkit/cartSlice';

const Filters = () => {
  const { data } = useProducts();
  const dispatch = useDispatch();

  const {GridView, GalleryView } = useView();
  const gridView = GridView(data);
  const galleryView = GalleryView(data);
  const [view, setView] = useState('grid');

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleSortingChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'lowToHigh') {
      dispatch(sortByAscending());
      console.log("ascending")
    } else if (selectedOption === 'highToLow') {
      dispatch(sortByDescending());
      console.log("descending")
    }
  };
  
  // useEffect(() => {
  //   <ProductsItems productsView={view}/>
  // }, [view])

  return (
     <Container bg='gray.100' maxW='100vw' position='sticky' top='0' zIndex='98'>
            <Flex display={{base:'block', md:'flex'}} p={{base:'2', md:'5'}} justifyContent='space-between'>
            <HStack >
                <Box role='group'> 
                <IconButton
                  fontSize={{base:'12px', md:'sm'}}
                  transition= 'all 0.3s ease-out'
                  transform='rotate(0deg)'
                  _groupHover={{transform: 'rotate(90deg)'}}
                  onClick={() =>handleViewChange('grid')}
                  icon={<Image src='/grid.png' w={{base:'12px', md:'20px'}} h={{base:'12px', md:'20px'}}/>}
                ></IconButton></Box> 


              <Box role='group'> 
                <IconButton
                  fontSize={{base:'12px', md:'sm'}}
                  transition= 'all 0.5s ease-out'
                  transform='rotate(0deg)'
                  _groupHover={{transform: 'rotate(180deg)'}}
                  onClick={() => handleViewChange('gallery')}
                  icon={<Image src='/layout.png' w={{base:'12px', md:'20px'}} h={{base:'12px', md:'20px'}}/>}
                ></IconButton></Box> 

              {/* <Box role='group'> 
                 <IconButton
                  fontSize={{base:'12px', md:'sm'}}
                  transition= 'all 0.5s ease-out'
                  transform='rotate(0deg)'
                  _groupHover={{transform: 'rotate(180deg)'}}
                  icon={<Image src='/filter.png' w={{base:'12px', md:'20px'}} h={{base:'12px', md:'20px'}}/>}
                ></IconButton></Box> */}
               
                {/* <Text fontSize={{base:'10px', md:'sm'}}>| Showing 1–16 of 32 results </Text> */}
            </HStack>
          
                <Box>
                <HStack textAlign='center' display='flex' gap='3'>
                    <Text size={{base:'12px', md:'sm'}}>Show</Text>
                    <Stack spacing={3} fontSize={{base:'12px', md:'sm'}}>
                      <Select placeholder='8' size='sm'>
                        <option>16</option>  
                        <option>All</option>  
                      </Select> 
                    </Stack>
                    <Text fontSize={{base:'12px', md:'sm'}}>Sort by</Text>
                    <Stack spacing={3} size={{base:'12px',md:'sm'}}>
                    <Select onChange={handleSortingChange}>
                      <option value="lowToHigh">Price Low to High</option>
                      <option value="highToLow">Price High to Low</option>
                    </Select>
                    </Stack>
                   
                    
                </HStack>
                </Box>
               
            </Flex>
         <ProductsItems productsView={view}/>
           
    </Container>

  )
}

export default Filters


const PriceFilter = () => {
  return (
    <Box>

    </Box>
  )
}