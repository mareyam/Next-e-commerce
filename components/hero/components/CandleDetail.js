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
  Stack
} from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { useProducts } from "../../../hooks/useProducts";

const CandleDetail = () => {
  const { data } = useProducts();
  return (
    <Container
      maxW="container.lg"
      display={{ base: "block", md: "flex" }}
      border="2px solid">
        
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
              {data?.map((item) => {
                return (
                  <SwiperSlide>
                    <Image src={item.image}/>
                    <p>{item.id}</p>
                  </SwiperSlide>
                )
              })}

          </Swiper>
       

{/*             
      <Flex
        justifyContent="center"
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center" >
        <Center border='2px solid' w={{base:'100%', md:'40%'}}>
          <Stack>
            <Heading marginTop="2" fontSize="3xl" color="green.600">
              50+ Beautiful scented candles made for your home and for your wellness
            </Heading>
            <Text fontSize='md'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</Text>
            <Button w="100%" color="white" bg="green.300">Explore More</Button>
           </Stack>
        </Center>

      
       </Flex>  */}
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

 



