"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "./style.css";
import { useTranslations } from "next-intl";

const Swiper_1 = () => {
  const t = useTranslations("Swiper_1");
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 5000 }}
      speed={600}
      parallax={true}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="swiper"
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      <div
        slot="container-start"
        className="parallax-bg"
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="title1 container" data-swiper-parallax="-300">
          {t("title1")}
        </div>
        <div className="subtitle1 container" data-swiper-parallax="-200">
          {t("desc1")}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          {t("title2")}
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          {t("desc2")}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiper_1;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }