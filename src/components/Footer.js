import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faClock,
  faEnvelope,
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import div from "../../public/assets/div.svg";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#405D72] text-white py-5 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
        <div className="footer-res flex justify-center items-center mb-5 md:mb-0"></div>
        <div className="w-full flex max-md:text-center max-md:flex-col justify-between mb-5 md:mb-0">
          <Link
            href={"/"}
            className="font-extrabold h-6 text-2xl max-md:text-center max-sm:mb-6"
          >
            {t("logo")}
          </Link>
          <div className="flex flex-col gap-4 max-md:text-center">
            <h3 className="footer-title text-xl font-bold max-md:text-center text-white max-sm:mt-6">
              {t("footerInfo")}
            </h3>
            <Link className="font-medium text-sm leading-3" href={"/about"}>
              {t("about.title")}
            </Link>
            <Link
              className="font-medium text-sm leading-3"
              href={"/production"}
            >
              {t("produce.title")}
            </Link>
            <Link className="font-medium text-sm leading-3" href={"/catalog"}>
              {t("catalog.title")}
            </Link>
            <Link
              className="font-medium text-sm leading-3"
              href={"/video-abzor"}
            >
              {t("video.title")}
            </Link>
            <Link
              className="font-medium text-sm leading-3 mb-10"
              href={"/contact"}
            >
              {t("contact.title")}
            </Link>
          </div>
          <div className="2 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
            <h3 className="footer-title pb-2 text-lg font-bold max-md:text-center text-white">
              {t("footerContact")}
            </h3>
            <p className="flex items-center gap-2 font-medium text-base">
              <FontAwesomeIcon
                className="text-[#fff] text-lg"
                icon={faLocationDot}
              />
              <span className="text-white">{t("footerDelivery")}</span>
            </p>
            <Link
              className="flex items-center gap-2 text-lg font-bold "
              href={"tel:+998931144362"}
            >
              <FontAwesomeIcon className="text-[#fff] text-lg" icon={faPhone} />{" "}
              +998931144362
            </Link>
            <Link
              className="flex items-center gap-2 font-medium text-base max-sm:text-sm"
              href={"mailto:oltiariqinnovatsionmarkazi@gmail.com"}
            >
              <FontAwesomeIcon
                className="text-[#fff] text-lg"
                icon={faEnvelope}
              />{" "}
              oltiariqinnovatsionmarkazi@gmail.com
            </Link>
            <p className="flex items-center gap-2 font-medium text-base mb-7">
              <FontAwesomeIcon className="text-[#fff] text-lg" icon={faClock} />
              <span className="text-white">{t("workTime")}</span>
            </p>
            <h3 className="footer-title pb-2 text-lg max-sm:text-center mb-4 font-bold text-[#fff]">
              {t("footerSocial")}
            </h3>
            <div className="flex gap-4 max-sm:justify-center">
              <Link href={"https://t.me/oltiariq_inno"}>
                <FontAwesomeIcon
                  className="text-3xl"
                  color="white"
                  icon={faTelegram}
                />
              </Link>
              <Link
                href={"https://www.youtube.com/@OltiariqInnovatsiyaMarkazi"}
              >
                <FontAwesomeIcon
                  className="text-3xl"
                  color="white"
                  icon={faYoutube}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[white] py-5">
        <div className="container flex items-center justify-between flex-wrap mx-auto">
          <p className="text-[white]">{t("footerRes")}</p>
          <Link
            href="https://t.me/shox_dev"
            target="_blank"
            className="flex items-center gap-2 text-center md:text-left div-logo"
          >
            <Image src={div.src} alt="developer logo" width={42} height={48} />
            <div>
              <p className="text-sm text-white">
                Developed by <br /> <b>DIV-Group</b>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }