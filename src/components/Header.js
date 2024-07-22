"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import CartContext from "@/contexts/CartContext";
import HeadlessUIModal from "./HeadlessUIModal";
import logo from "../../public/assets/logo-header.png";
import NavItems from "./NavItems";
import LangSelect from "./LangSelect";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="bg-[#405D72] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link href={"/"}>
              <Image src={logo} width={120} height={120} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:flex space-x-4">
            <NavItems setIsOpen={setIsOpen} />
          </div>
          <LangSelect />
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          as="div"
        >
          <Transition.Child
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="div"
          >
            {isOpen && (
              <div className="lg:hidden">
                <NavItems isMobile setIsOpen={setIsOpen} />
              </div>
            )}
          </Transition.Child>
        </Transition>
      </div>
      <div className="container">
        <div className="md:flex justify-between md:items-center md:py-6 max-md:gap-2 max-md:flex max-md:flex-col">
          <Link
            href="/"
            className="font-extrabold text-xl max-md:text-center text-[#111111] mt-5"
          >
            {t("logo.title")}
          </Link>
          <div className="1 flex items-center gap-4">
            <div className="faPhone flex justify-center items-center max-md:hidden">
              <FontAwesomeIcon
                className="text-[#405D72] text-xl"
                icon={faPhone}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-normal text-[#a1a1a1] text-xs max-md:hidden">
                {t("workTime")}
              </span>
              <Link
                href="tel:+998931144362"
                className="font-bold cursor-pointer text-[#111111]"
              >
                +998931144362
              </Link>
              <h4 className="font-bold text-[#405D72]">{t("call")}:</h4>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              className="text-[#405D72] text-xl max-md:hidden"
              icon={faEnvelope}
            />
            <Link
              href={"mailto:oltiariqinnovatsionmarkazi@gmail.com"}
              className="font-semibold max-sm:text-sm text-[#111111]"
            >
              oltiariqinnovatsionmarkazi@gmail.com
            </Link>
          </div>
          <div
            onClick={handleToggleModal}
            className="relative w-20 cursor-pointer p-3 hover:bg-[#F3F4F6] group"
          >
            <div className="relative">
              <div className="faPhone flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-[#405D72] text-lg"
                  icon={faCartShopping}
                />
              </div>
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            </div>
          </div>
          <HeadlessUIModal isOpen={isModalOpen} onClose={handleToggleModal} />
        </div>
      </div>
    </div>
  );
};

export default Header;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }