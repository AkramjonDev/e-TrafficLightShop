"use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from "next-intl";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    data: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendTelegramMessage = () => {
    const { firstName, phoneNumber, data } = formData;
    const message = `Ismi: ${firstName} \nTelefon raqami: ${phoneNumber} \nQo'shimcha ma'lumot: ${data}`;

    const botToken = "6900883015:AAE5kJJi6c-M4Q_s1f2nmaUb-kvrK8mCwKM";
    const chatId = "-1002040334789";

    return axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      phoneNumber: "",
      data: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendTelegramMessage();
      resetForm();
      notify();
    } catch (error) {
      console.log("Error handling form submission:", error);
    }
  };

  const notify = () => {
    toast.info("Sorovingiz jonatildi");
  };

  const t = useTranslations("Form");
  return (
    <div className="form-bg bg-[#ffffff] py-10 md:py-20 rounded-md">
      <div className="container mx-auto px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center md:items-start"
        >
          <h4 className="font-semibold text-2xl mb-5 mt-4 md:mt-0 text-center md:text-left">
            {t("title")}
          </h4>
          <p className="text-[#686868] text-lg font-medium text-center md:text-left">
            {t("desc")}
          </p>
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto mt-5 mb-5">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="py-3 border-b-2 border-b-gray-500 focus:outline-none w-full md:w-96"
              placeholder={t("name")}
              type="text"
            />
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="py-3 border-b-2 border-b-gray-500 outline-none w-full md:w-96"
              placeholder={t("phoneNumber")}
              type="tel"
            />
          </div>
          <input
            name="data"
            value={formData.data}
            onChange={handleInputChange}
            className="py-3 border-b-2 border-b-gray-500 outline-none w-full mb-8 md:w-[789px]"
            placeholder={t("data")}
            type="text"
          />
          <button type="submit" className="site-btn w-full md:w-auto">
            {t("btn")}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Form;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }