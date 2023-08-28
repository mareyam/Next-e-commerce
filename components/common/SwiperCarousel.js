import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import {Image, Box, Text, Heading, Stack, Center, IconButton} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { useProducts } from '../../hooks/useProducts';

const SwiperCarousel = () => {
  const { data } = useProducts();
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    // navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}

    >
      {data?.map((item) => {
        return (
          <SwiperSlide >
            <Box  position='relative' w={{ base: '100%', md: '100%' }} h={{base:'300px', md:"500px"}} background='center' backgroundSize='cover' bgImage={item.image}>
            <Center
                bg="rgba(255, 255, 255, 0.5)"
                border='1px solid gray'
                borderRadius='5%'
                color='black'
                position='absolute'
                m={{base:'2', md:'5'}}
                p={{base:'2', md:'5'}}
                bottom='1'
                w={{ base: '200px', md: '250px' }}
                h={{ base: '150px', md: '150px' }}
                >
            <Stack spacing='2'>
                <Text fontSize={{base:'sm', md:'md'}}>{item.id} - {item.title}</Text>
                <Heading fontSize={{base:'sm', md:'md'}}>{item.details}</Heading>
            </Stack>
            
            <IconButton
                  w='50px'
                  bottom='0'
                  position='absolute'
                  left={{base:'200px',md:'250px'}}
                  backgroundColor="gray.100"
                  fontSize={{base:'xl', md:'2xl'}}
                  
                  icon={<Box ><ArrowForwardIcon /></Box>}
                ></IconButton>
        
            </Center>



            </Box>
          </SwiperSlide>
        )
      })}

  </Swiper>
  )
}

export default SwiperCarousel