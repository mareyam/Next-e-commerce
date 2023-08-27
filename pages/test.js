import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import {Image, Flex, Box, Text, Heading, Stack, Center, IconButton} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useProducts } from '../hooks/useProducts';

const TestimonialCarousel = () => {
  const { data } = useProducts();
  return (
    <Swiper
    border='2px solid green'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}

    >
       {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Box
            m={{ base: '2', md: '5' }}
            p={{ base: '2', md: '5' }}
            w={{ base: '200px', md: '250px' }}
            h={{ base: '150px', md: '150px' }}
            borderWidth='2px'
            borderColor='black'
            color='black'
          >
            <Center>
              <Flex>
                <Image src={item.image} />
                <Stack spacing='2'>
                  <Heading fontSize={{ base: 'sm', md: 'md' }}>{item.id} - {item.title}</Heading>
                  <Text fontSize={{ base: 'sm', md: 'md' }}>{item.details}</Text>
                </Stack>
              </Flex>
            </Center>
          </Box>
        </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default TestimonialCarousel