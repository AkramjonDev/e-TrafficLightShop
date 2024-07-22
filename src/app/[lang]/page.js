import Image from "next/image";
import Swiper_1 from "@/components/Swiper_1/Swiper_1";
import Swiper_2 from "@/components/Swiper_2/Swiper_2";
import ProductCatalog from "@/components/Catalog/ProductCatalog";
import Swiper_3 from "@/components/Swiper_3/Swiper_3";
import Form from "@/components/Form/Form";
import Info from "@/components/Info/Info";
import { CartProvider } from "@/contexts/CartContext";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { lang }}) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <Swiper_1 />
      <Swiper_2 />
      <ProductCatalog />
      <Swiper_3 />
      <Form />
      <Info />
    </>
  );
}
