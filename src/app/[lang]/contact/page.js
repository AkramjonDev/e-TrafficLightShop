import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Swiper_4 from "@/components/Swiper_4/Swiper_4";
import SalesTeam from "@/components/SalesTeam";
import Form from "@/components/Form/Form";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title:
    "Kontaktlar - Oltiariq Innovatsion Markazi: Bog‘lanish uchun Ma'lumotlar",
  description:
    "Oltiariq Innovatsion Markazi bilan bog‘lanish uchun barcha kerakli ma'lumotlar: manzil, telefon raqamlari, elektron pochta. Har qanday savollaringiz bo‘lsa yoki qo‘shimcha ma'lumot kerak bo‘lsa, biz bilan bog‘laning.",
};
const page = ({ params: { lang } }) => {
  unstable_setRequestLocale(lang);
  return (
    <div className="bg-[#ffffff]">
      <div className="container mx-auto px-4 py-10">
        <div className="text-sm mb-4">
          <Link href={"/"} className="text-[#121212] hover:underline">
            Bosh sahifa
          </Link>{" "}
           <span>Kontaktlar</span>
        </div>
        <h1 className="font-bold text-3xl my-10">Kontaktlar</h1>
        <div className="mb-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
          <div className="p-7 flex flex-col bg-[#F3F4F6]">
            <h2 className="font-bold text-2xl mb-5">
              Bosh o'ffis va ishlab chiqarish hududi
            </h2>
            <div className="mb-4">
              <h6 className="font-semibold text-xl flex items-center mb-3">
                <FontAwesomeIcon
                  className="text-[#405D72] mr-3 text-2xl"
                  icon={faLocationDot}
                />
                Manzil
              </h6>
              <p>9F6X+X6G, Oltiariq, Farg'ona Viloyati, Узбекистан</p>
            </div>
            <div className="mb-4">
              <h6 className="font-semibold text-xl flex items-center mb-3">
                <FontAwesomeIcon
                  className="text-[#405D72] mr-3 text-2xl"
                  icon={faClock}
                />
                Ish vaqti
              </h6>
              <p>Пн-Пт: 9:00-18:00, Сб-Вс: выходной</p>
            </div>
            <div className="mb-4">
              <h6 className="font-semibold text-xl flex items-center mb-3">
                <FontAwesomeIcon
                  className="text-[#405D72] mr-3 text-2xl"
                  icon={faPhone}
                />
                Telefon
              </h6>
              <p>+998931144362</p>
            </div>
            <div className="">
              <h6 className="font-semibold text-xl flex items-center mb-3">
                <FontAwesomeIcon
                  className="text-[#405D72] mr-3 text-2xl"
                  icon={faEnvelope}
                />
                E-mail
              </h6>
              <p>oltiariqinnovatsion markazi7@gmail.com</p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.1182779909454!2d71.49522327582447!3d40.36190167144843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bba1996a15000b%3A0x24c95e06f1492b03!2sOltariq%20innovatsion%20hududi.!5e0!3m2!1sru!2s!4v1716698523142!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <h6 className="text-center font-semibold text-2xl">
          Ofisimizdan kadrlar
        </h6>
        <Swiper_4 />
        <Form />
      </div>
    </div>
  );
};

export default page;
