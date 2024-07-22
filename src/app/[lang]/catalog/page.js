import TrafficLightCards from "@/components/TrafficLightCards";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title:
    "Mahsulotlarimiz - Oltiariq Innovatsion Markazi: Yo‘l Harakati Svetoforlari va Yoritgichlari",
  description:
    "Oltiariq Innovatsion Markazining zamonaviy yo‘l harakati svetoforlari va yoritgichlari mahsulotlarini ko‘rib chiqing. O'zbekiston bo'ylab eng yaxshi narxlarda sifatli va bardoshli yo‘l belgilari, piyodalar yoritgichlari va LED svetoforlar yetkazib beriladi.",
};

const page = ({ params: { lang } }) => {
  unstable_setRequestLocale(lang);
  return (
    <div>
      <TrafficLightCards />
    </div>
  );
};

export default page;

