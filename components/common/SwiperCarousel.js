import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import {Image, Box, Text, Heading, Stack, Center, IconButton} from "@chakra-ui/react";
import { useProducts } from '../../hooks/useProducts';

const SwiperCarousel = () => {
  const { data } = useProducts();
  return (
    <Swiper
    border='2px solid green'
    // modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    // navigation
    // pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}

    >
      {data?.map((item) => {
        return (
          <SwiperSlide >
            <Box position='relative' w={{ base: '100%', md: '100%' }} h={{base:'300px', md:"500px"}} background='center' backgroundSize='cover' bgImage={item.image}>
            <Center
                bg="rgba(255, 255, 255, 0.5)"
                color='black'
                position='absolute'
                m='5'
                bottom='0'
                w={{ base: '100px', md: '250px' }}
                h={{ base: '100px', md: '200px' }}
                >
            <Stack spacing='5'>
                <Text>{item.id} - {item.title}</Text>
                <Heading fontSize='md'>{item.details}</Heading>
            </Stack>
            <Center>
            <IconButton
                  w='100px'
                  position='absolute'
                    left='250px'
                  backgroundColor="gray.100"
                  icon={<Box>&#128722;</Box>}
                ></IconButton>
            </Center>
        
            </Center>



            </Box>
          </SwiperSlide>
        )
      })}

  </Swiper>
  )
}

export default SwiperCarousel