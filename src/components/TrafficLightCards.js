"use client";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CartContext from "@/contexts/CartContext";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations, useLocale } from "next-intl";
import { images } from "@/utils/images";

const TrafficLightCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({});
  const t = useTranslations("catalog");
  const locale = useLocale();
  const trafficLights = t.raw("trafficLights");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (lightId, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [lightId]: option,
    }));
  };

  const handleAddToCart = (light) => {
    const selectedOption = selectedOptions[light.id];
    if (selectedOption) {
      addToCart({
        id: light.id,
        title: t(`trafficLights.${light.id - 1}.title`), // Use the translation key correctly
        image: images[light.image],
        selectedOption: selectedOption.label,
        price: selectedOption.price,
        quantity: 1,
      });
      toast.success(t("addToCartSuccess"));
    } else {
      toast.error(t("addToCartError"));
    }
  };

  const filteredTrafficLights = trafficLights.filter((light) =>
    t(`trafficLights.${light.id - 1}.title`).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-8">
      <ToastContainer />
      <div className="bg-[#f3f4f6]">
        <div className="container py-4">
          <form className="flex items-center">
            <input
              className="w-full h-12 px-6 py-4 outline-none border-none"
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="site-btn flex items-center gap-3 bg-white rounded-r-3xl">
              <FontAwesomeIcon icon={faSearch} />
              <span className="hidden md:block">{t("btnSearch")}</span>
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {filteredTrafficLights.map((light) => {
            const selectedOption = selectedOptions[light.id];
            const price = selectedOption
              ? selectedOption.price
              : light.options[0].price;
            return (
              <div
                key={light.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={images[light.image]}
                      alt={t(`trafficLights.${light.id - 1}.title`)}
                      width={160}
                      height={160}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {t(`trafficLights.${light.id - 1}.title`)}
                  </h3>
                  <ul className="mb-4">
                    {light.details.map((detail, index) => (
                      <li key={index} className="text-gray-700 mb-2">
                        <strong>{t(`detail.${detail.label}`)}:</strong>{" "}
                        {detail.value}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">{t("variants")}</h4>
                    <ul>
                      {light.options.map((option, index) => (
                        <li key={index} className="text-gray-700 mb-2">
                          <input
                            type="radio"
                            id={`option-${light.id}-${index}`}
                            name={`option-${light.id}`}
                            value={option.label}
                            checked={
                              selectedOption &&
                              selectedOption.label === option.label
                            }
                            onChange={() =>
                              handleOptionChange(light.id, option)
                            }
                          />
                          <label
                            htmlFor={`option-${light.id}-${index}`}
                            className="ml-2"
                          >
                            {option.label} - {option.price} $
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold mb-4">
                      {t("price")}: {price} $
                    </p>
                    <button
                      className="site-btn w-full"
                      onClick={() => handleAddToCart(light)}
                    >
                      {t("buy")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrafficLightCards;
