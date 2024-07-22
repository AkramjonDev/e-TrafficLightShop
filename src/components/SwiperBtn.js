import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSwiper } from "swiper/react";

const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="mt-10 mb-10">
      <button
        className="w-16 h-16 border rounded-full ml-4 bg-white"
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon
          className="text-[#008dff] text-xl"
          icon={faChevronLeft}
        />
      </button>
      <button
        className="w-16 h-16 border rounded-full ml-4 bg-white"
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon
          className="text-[#008dff] text-xl"
          icon={faChevronRight}
        />
      </button>
    </div>
  );
};

export default SwiperBtn;



// {
//   id: 2,
//   image: img2,
//   title: "LED svetofor T.6.1 / T.6.2 / T.7.1 / T.7.2 / T.12.1 / T.12.2",
//   details: [
//     { label: "Signal chiqishi diafragma diametri", value: "200mm/300mm" },
//     { label: "Signal rangi", value: "qizil/sariq/yashil" },
//     { label: "Bo'lim uchun quvvat sarfi", value: "18 Vt / 25 Vt" },
//     { label: "Ishlash kuchlanishi", value: "220 V" },
//     { label: "Ishlash harorati oralig'i", value: "-60 dan +60 gacha" },
//   ],
//   options: [
//     { label: "Svetofor T.6.1 (qizil, ø 200 mm)", price: 110 },
//     { label: "Svetofor T.6.2 (qizil, ø 300 mm)", price: 130 },
//     { label: "Svetofor T.7.1 (sariq, ø 200 mm)", price: 120 },
//     { label: "Svetofor T.7.2 (sariq, ø 300 mm)", price: 140 },
//     { label: "Svetofor T.12.1 (yashil, ø 200 mm)", price: 150 },
//     { label: "Svetofor T.12.2 (yashil, ø 300 mm)", price: 170 },
//   ],
// },
// {
//   id: 3,
//   image: img3,
//   title: "LED svetofor T.6.d.1 / T.6.d.2 / T.7.d.1 / T.7.d.2",
//   details: [
//     { label: "Signal chiqishi diafragma diametri", value: "200mm/300mm" },
//     { label: "Signal rangi", value: "qizil/sariq/yashil" },
//     { label: "Bo'lim uchun quvvat sarfi", value: "18 Vt / 25 Vt" },
//     { label: "Ishlash kuchlanishi", value: "220 V" },
//     { label: "Ishlash harorati oralig'i", value: "-60 dan +60 gacha" },
//   ],
//   options: [
//     { label: "Svetofor T.6.d.1 (qizil, ø 200 mm)", price: 190 },
//     { label: "Svetofor T.6.d.2 (qizil, ø 300 mm)", price: 210 },
//     { label: "Svetofor T.7.d.1 (sariq, ø 200 mm)", price: 200 },
//     { label: "Svetofor T.7.d.2 (sariq, ø 300 mm)", price: 220 },
//   ],
// },
// {
//   id: 4,
//   image: img4,
//   title: "LED svetofor T.8.1 / T.8.2",
//   details: [
//     { label: "Signal chiqishi diafragma diametri", value: "200mm/300mm" },
//     { label: "Signal rangi", value: "qizil/yashil" },
//     { label: "Bo'lim uchun quvvat sarfi", value: "18 Vt / 25 Vt" },
//     { label: "Ishlash kuchlanishi", value: "220 V" },
//     { label: "Ishlash harorati oralig'i", value: "-60 dan +60 gacha" },
//   ],
//   options: [
//     { label: "Svetofor T.8.1 (qizil, ø 200 mm)", price: 120 },
//     { label: "Svetofor T.8.2 (qizil, ø 300 mm)", price: 140 },
//   ],
// },

// {
//   id: 5,
//   image: img5,
//   title: "LED svetofor T.8.1 / T.8.2",
//   details: [
//     { label: "Signal chiqishi diafragma diametri", value: "200mm/300mm" },
//     { label: "Signal rangi", value: "qizil/yashil" },
//     { label: "Bo'lim uchun quvvat sarfi", value: "18 Vt / 25 Vt" },
//     { label: "Ishlash kuchlanishi", value: "220 V" },
//     { label: "Ishlash harorati oralig'i", value: "-60 dan +60 gacha" },
//   ],
//   options: [
//     { label: "Svetofor T.8.1 (yashil, ø 200 mm)", price: 120 },
//     { label: "Svetofor T.8.2 (qizil, ø 200 mm)", price: 140 },
//   ],
// },
// {
//   id: 6,
//   image: img6,
//   title: "LED svetofor T.8.1 / T.8.2",
//   details: [
//     { label: "Signal chiqishi diafragma diametri", value: "200mm/300mm" },
//     { label: "Signal rangi", value: "qizil/yashil" },
//     { label: "Bo'lim uchun quvvat sarfi", value: "18 Vt / 25 Vt" },
//     { label: "Ishlash kuchlanishi", value: "220 V" },
//     { label: "Ishlash harorati oralig'i", value: "-60 dan +60 gacha" },
//   ],
//   options: [
//     { label: "Svetofor T.8.1 (yashil, ø 200 mm)", price: 120 },
//     { label: "Svetofor T.8.2 (qizil, ø 200 mm)", price: 140 },
//   ],
// },