import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import img from "../../public/assets/about_team.jpg";
import user from "../../public/assets/User-avatar.svg.png";
import Link from "next/link";
import Form from "./Form/Form";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const AboutPage = ({ lang }) => {
  unstable_setRequestLocale(lang);
  const t = useTranslations("AboutPage");
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-4">{t("title1")}</h1>
              <p className="text-lg text-gray-700 mb-4">{t("desc1")}</p>
              <p className="text-lg text-gray-700">{t("desc2")}</p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <Image
                src={img}
                alt="Biz haqimizda"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/h3jjj48nsqg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mb-10"
        ></iframe>
        {/* https://youtube.com/shorts/h3jjj48nsqg?feature=share */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("title2")}</h2>
          <p className="text-lg text-gray-700 mb-4">{t("desc3")}</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("title3")}</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">{t("li1")}</li>
            <li className="mb-2">{t("li2")}</li>
            <li className="mb-2">{t("li3")}</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("title4")}</h2>
          <p className="text-lg text-gray-700 mb-4">{t("desc4")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src={user}
                alt="Jamoa a'zosi 1"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Ism Familiya</h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src={user}
                alt="Jamoa a'zosi 2"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Ism Familiya</h3>
              <p className="text-gray-700">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src={user}
                alt="Jamoa a'zosi 3"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Ism Familiya</h3>
              <p className="text-gray-700">Lead Engineer</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t("title5")}</h2>
          <p className="text-lg text-gray-700 mb-4">{t("desc5")}</p>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#405D72] mr-2" />
            <p className="text-lg text-gray-700">+998931144362</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#405D72] mr-2"
            />
            <Link
              href={"mailto:oltiariqinnovatsionmarkazi@gmail.com"}
              className="text-lg text-gray-700 hover:underline"
            >
              oltiariqinnovatsion markazi@gmail.com
            </Link>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-[#405D72] mr-2"
            />
            <p className="text-lg text-gray-700">
              9F6X+X6G, Oltiariq, Farg'ona Viloyati, Узбекистан
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default AboutPage;
