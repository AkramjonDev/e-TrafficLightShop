"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./style.css";
import useCounter from "@/hooks/useCounter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

const ProductItem = ({ product }) => {
  const { count, handleIncrement, handleDecrement } = useCounter({ product });
  const t = useTranslations("ProductItem");
  return (
    <div className="flex flex-col items-center">
      <div className="h-40">
        <Image
          className="mb-10"
          src={product.image}
          alt={product.title}
          width={165}
          height={165}
        />
      </div>
      <h4 className="font-semibold mb-10">{product.title}</h4>
      <div className="flex items-center gap-20">
        <Link
          href={"/catalog"}
          className="text-[#111111] font-semibold border-b-2 border-black"
        >
          {t("info")}
        </Link>
        {count === 0 ? (
          <button
            className="bg-[#405D72] hover:bg-[#567A93] text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
            onClick={handleIncrement}
          >
            <FontAwesomeIcon className="text-white" icon={faCartShopping} />
          </button>
        ) : (
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={handleDecrement}
              className="bg-red-500 text-white px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              -
            </button>
            <span className="text-black">{count}</span>
            <button
              onClick={handleIncrement}
              className="bg-[#405D72] text-white px-4 rounded hover:bg-[#567A93] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }