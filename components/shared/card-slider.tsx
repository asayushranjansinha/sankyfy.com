"use client";
import React from "react";

import "swiper/css";
import FeaturedCard from "@/components/shared/featured-card";
import { Swiper, SwiperSlide } from "swiper/react";

interface CardSliderProps {
  data: any[];
}
const CardSlider: React.FC<CardSliderProps> = ({ data, ...props }) => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      {...props}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="flex items-center !justify-center cursor-pointer">
          <FeaturedCard
            title={item.title}
            altText={item.title}
            tags={item.tags}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickEvent={() => {}}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
