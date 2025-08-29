import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Gallery.css";

const ministries = [
  { img: "/Gell1.jpg" },
  { img: "/Gell2.jpg" },
  { img: "/Gell3.jpg" },
  { img: "/Gell4.jpg" },
  { img: "/Gell5.jpg" },
  { img: "/Gell6.jpg" },
  { img: "/Gell7.jpg" },
  { img: "/Gell8.jpg" },
  { img: "/Gell9.jpg" },
  { img: "/Gell10.jpg" },
  { img: "/Gell11.jpg" },
  { img: "/Gell12.jpg" },
  { img: "/Gell13.jpg" },
  { img: "/Gell14.jpg" },
  { img: "/Gell15.jpg" },
  { img: "/Gell16.jpg" },
  { img: "/Gell17.jpg" },
  { img: "/Gell18.jpg" },
  { img: "/Gell19.jpg" },
];

const MinistriesSection = () => {
  return (
    <div className="mt-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {ministries.map((m, index) => (
          <SwiperSlide key={index}>
            <img
              src={m.img}
              alt={`Ministry ${index + 1}`}
              className="w-full h-60 object-cover rounded-md shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MinistriesSection;
