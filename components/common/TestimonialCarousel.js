import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import {Image,Flex,  Box, Text, Heading, Stack, Center, IconButton} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { useProducts } from '../../hooks/useProducts';

const SwiperCarousel = () => {
  const { data } = useProducts();
  return (
    <Swiper
    border='2px solid green'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    // navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}

    >
      {data?.map((item) => {
        return (
          <SwiperSlide >
            <Box h='300px' >
            <Center
                w='100%'
                h='100%'
                >
            <Flex  align='center' bg='white' p='5'>
            <Image
              borderRadius="full" 
              src={item.image}
              h="150px"
              w="150px"
              p='5'
            />
            <Stack spacing='2'>
                <Text fontSize={{base:'sm', md:'md'}}>{item.id} - {item.title}</Text>
                <Heading fontSize={{base:'sm', md:'md'}}>{item.details}</Heading>
            </Stack>
            </Flex>
            </Center>
            </Box>
          </SwiperSlide>
        )
      })}

  </Swiper>
  )
}

export default SwiperCarousel