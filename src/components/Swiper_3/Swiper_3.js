"use client";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperBtn from "../SwiperBtn";
import { useTranslations } from "next-intl";

const Swiper_3 = () => {
  const t = useTranslations("Swiper_3");
  return (
    <div>
      <div className="bg-[#F3F4F6] pt-10">
        <div className="container">
          <h1 className="mb-10 font-semibold text-2xl">{t("title")}</h1>
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
            <SwiperSlide className="swiper-slide3">
              <iframe
                width="410"
                height="282"
                src="https://www.youtube.com/embed/4yYL4e4eJIM?si=OzaSqnDoHGVqUxG3"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide3">
              <iframe
                width="410"
                height="282"
                src="https://www.youtube.com/embed/SlaHMr1gA2M?si=BE8-nXVUNEyUXxBz"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide3">
              <iframe
                width="410"
                height="282"
                src="https://www.youtube.com/embed/a5yXB4MDRdg"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide3">
              <iframe
                width="410"
                height="282"
                src="https://www.youtube.com/embed/KwoEmhuEpU4?si=jCtXuDdLDI-IxmOD"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide3">
              <iframe
                width="410"
                height="282"
                src="https://www.youtube.com/embed/h45ou4_K1vI?si=eDPM3OPF0qleevKw"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperBtn />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swiper_3;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }