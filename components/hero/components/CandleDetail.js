import React from "react";
import {
  Button,
  Spacer,
  Container,
  Image,
  Box,
  List,
  MdCheckCircle,
  Heading,
  Text,
  ListItem,
  ListIcon,
  Flex,
  Center, 
  Stack,
  Link
} from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { useProducts } from "../../../hooks/useProducts";
import SwiperCarousel from "../../common/SwiperCarousel";
import NextLink from 'next/link'
import styles from '../../../styles/products.module.css';



const CandleDetail = () => {
  const { data } = useProducts();
  return (

   
  
    <Container
      maxW="container.lg"
      display={{ base: "block", md: "flex" }}
     >
  
    <Box boxSize='500px' w={{base:'100%', md:'50%'}} align='left'>
      <Center   h="100%" >
          <Stack align='left'>
            <Heading marginTop="2" fontSize="3xl" color="gray.600">
              50+ Beautiful scented candles made for your home and for your wellness
            </Heading>
            <Text fontSize='md'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</Text>
            <Link as={NextLink} href='/products'>
              <button  className={styles.explore_more} w="70%" bg="gray.300">Explore More</button>
             </Link>
           </Stack>

        </Center>

    </Box>

      <Box h='300px' w={{ base: '100%', md: '50%' }}>
        <SwiperCarousel />
      </Box>
    </Container>
  );
};

export default CandleDetail;

{/* <Image
width="500px"
height="300px"
objectFit="cover"
src={"/image 1-1.png"}
alt="candle"
/> */}

 



