"use client";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperBtn from "../SwiperBtn";
import Image from "next/image";
import img_contact from "../../../public/assets/photo_2022-05-25_12-24-19.jpg";
import img_contact2 from "../../../public/assets/about_team4.jpg";

const Swiper_4 = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="container">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            className="mySwiper mb-10"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide key={1} className="swiper-slide3 shadow-lg">
              <Image
                src={img_contact}
                alt="Office Image "
                width={480}
                height={360}
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide key={2} className="swiper-slide3 shadow-lg">
              <Image
                src={img_contact2}
                alt="Office Image 1"
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide key={3} className="swiper-slide3 shadow-lg">
              <Image
                src={
                  "https://tashkent.znaki154.ru/upload/resize_cache/iblock/e3a/480_360_0/e3afa0aa328b998d38b929c001ac9d9b.jpg"
                }
                alt="Office Image 2"
                width={480}
                height={360}
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide key={4} className="swiper-slide3 shadow-lg">
              <Image
                src={
                  "https://tashkent.znaki154.ru/upload/resize_cache/iblock/bd2/480_360_0/bd22ff1736e78c2142d3bf4fe861a0f9.jpg"
                }
                alt="Office Image 2"
                width={480}
                height={360}
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperBtn />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swiper_4;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }

{
  /* <Image
  src={
    "https://tashkent.znaki154.ru/upload/resize_cache/iblock/bd2/480_360_0/bd22ff1736e78c2142d3bf4fe861a0f9.jpg"
  }
  alt="Office Image 2"
  width={480}
  height={360}
  className="w-full h-auto"
/> */
}
