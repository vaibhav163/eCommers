import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react'   

const swier = () => {
  return (
    <div>
      <Swiper
      >
        <SwiperSlide><img src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"/></SwiperSlide>
        <SwiperSlide><img src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=480"/></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/400x300/22c55e/ffffff?text=Green+Shoe"/>`</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default swier