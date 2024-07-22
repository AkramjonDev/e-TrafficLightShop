import Link from "next/link";
import { useTranslations } from "next-intl";

const NavItems = ({ isMobile, setIsOpen }) => {
  const t = useTranslations("Header");
  const handleClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col space-y-2" : "space-x-4"
      } items-center`}
    >
      <li className="nav-item">
        <Link href={"/about"}>
          <p
            className="nav-link text-white hover:text-gray-900 transition-colors duration-200"
            onClick={handleClick}
          >
            {t("about.title")}
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/production">
          <p
            className="nav-link text-white hover:text-gray-900 transition-colors duration-200"
            onClick={handleClick}
          >
            {t("produce.title")}
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/catalog">
          <p
            className="nav-link text-white hover:text-gray-900 transition-colors duration-200"
            onClick={handleClick}
          >
            {t("catalog.title")}
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link href={"/video-abzor"}>
          <p
            className="nav-link text-white hover:text-gray-900 transition-colors duration-200"
            onClick={handleClick}
          >
            {t("video.title")}
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contact">
          <p
            className="nav-link text-white hover:text-gray-900 transition-colors duration-200"
            onClick={handleClick}
          >
            {t("contact.title")}
          </p>
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }