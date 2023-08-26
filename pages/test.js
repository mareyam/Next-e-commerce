import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Image} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useProducts } from '../hooks/useProducts';

const Test = () => {
  const { data } = useProducts();

  return (
    <Swiper
      // install Swiper modules
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
  );
};
export default Test;