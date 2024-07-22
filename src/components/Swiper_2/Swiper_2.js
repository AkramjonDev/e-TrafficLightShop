"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperBtn from "../SwiperBtn";
import ProductItem from "../ProductItem";
import img1 from "../../../public/assets/productionLight/product-1.png";
import img2 from "../../../public/assets/productionLight/product-3.png";
import img3 from "../../../public/assets/productionLight/Mobile-solar-signal-light-2.jpg";
import img4 from "../../../public/assets/productionLight/product-5.png";
import img5 from "../../../public/assets/productionLight/product-6.avif";
import img6 from "../../../public/assets/productionLight/product-7.jpg";
import { useTranslations } from "next-intl";

const products = [
  {
    id: 1,
    image: img1,
    title: "Piyodalar o'tish yoritgichi IPP-200 (220V)",
    price: 100,
  },
  {
    id: 2,
    image: img2,
    title: "LED svetofor T.1.1 / T.1.2 T.8.1 / T.8.2",
    price: 120,
  },
  {
    id: 3,
    image: img6,
    title: "LED svetofor T.6.1 / T.6.2 / T.7.1 / T.7.2 / T.12.1 / T.12.2",
    price: 150,
  },
  {
    id: 4,
    image: img4,
    title: "LED svetofor T.6.d.1 / T.6.d.2 / T.7.d.1 / T.7.d.2",
    price: 130,
  },
  {
    id: 5,
    image: img5,
    title: "LED svetofor T.8.1 / T.8.2 T.8.1 / T.8.2",
    price: 110,
  },
];

const Swiper_2 = () => {
  const t = useTranslations("Swiper_2");
  return (
    <div className="bg-[#F3F4F6] mb-5">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("title")}</h2>
        <p className="text-base lg:text-lg">{t("desc")}</p>
      </div>
      <div className="container">
        <h1 className="mb-10 font-semibold text-2xl">{t("title1")}</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
          modules={[Pagination, Autoplay]}
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              className="swiper-slide2 rounded-xl shadow-lg"
              key={product.id}
            >
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
          <SwiperBtn />
        </Swiper>
      </div>
    </div>
  );
};

export default Swiper_2;

