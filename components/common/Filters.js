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

const Filters = () => {

  const [view, setView] = useState('grid');
  const [sort, setSort] = useState('low');
  const [count, setCount] = useState('4');
  
  const handleViewChange = (view) => {
    setView(view);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  useEffect(() => {
  }, [sort]);


  
  // useEffect(() => {
  //   <ProductsItems productsView={view}/>
  // }, [view])

  return (
    <Container bg="gray.100" maxW="100vw" position="sticky" top="0" zIndex="98">
      <Flex
        display={{ base: "block", md: "flex" }}
        p={{ base: "2", md: "5" }}
        justifyContent="space-between"
      >
        <HStack>
          <Box role="group">
            <IconButton
              fontSize={{ base: "12px", md: "sm" }}
              transition="all 0.3s ease-out"
              transform="rotate(0deg)"
              _groupHover={{ transform: "rotate(90deg)" }}
              onClick={() => handleViewChange("grid")}
              icon={
                <Image
                  alt="cart-item"
                  src="/grid.png"
                  w={{ base: "12px", md: "20px" }}
                  h={{ base: "12px", md: "20px" }}
                />
              }
            ></IconButton>
          </Box>

          <Box role="group">
            <IconButton
              fontSize={{ base: "12px", md: "sm" }}
              transition="all 0.5s ease-out"
              transform="rotate(0deg)"
              _groupHover={{ transform: "rotate(180deg)" }}
              onClick={() => handleViewChange("gallery")}
              icon={
                <Image
                  alt="cart-item"
                  src="/layout.png"
                  w={{ base: "12px", md: "20px" }}
                  h={{ base: "12px", md: "20px" }}
                />
              }
            ></IconButton>
          </Box>

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
          <HStack textAlign="center" display="flex" gap="3">
            <Text size={{ base: "12px", md: "sm" }}>Show</Text>
            <Stack spacing={3} fontSize={{ base: "12px", md: "sm" }}>
              <Select
                value={count}
                onChange={handleCountChange}
                placeholder="select"
                size="sm"
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="all">All</option>
              </Select>
            </Stack>
            <Text fontSize={{ base: "12px", md: "sm" }}>Sort by</Text>
            <Stack spacing={3} size={{ base: "12px", md: "sm" }}>
              <Select value={sort} onChange={handleSortChange}>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </Select>
            </Stack>
          </HStack>
        </Box>
      </Flex>
      <p>
        {sort} {view} {count}
      </p>

      <ProductsItems view={view} sort={sort} count={count} />
    </Container>
  );
}

export default Filters


const PriceFilter = () => {
  return (
    <Box>

    </Box>
  )
}