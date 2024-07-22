import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleCheckboxChange = () => {
    setPrivacyPolicy(!privacyPolicy);
  };

  const sendTelegramMessage = async () => {
    const message = `
     \n Имя: ${formData.name}
     \n Email: ${formData.email}
     \n Компания: ${formData.company}
     \n Телефон: ${formData.phone}
     \n Сообщение: ${formData.message}
    `;

    const botToken = "6900883015:AAE5kJJi6c-M4Q_s1f2nmaUb-kvrK8mCwKM";
    const chatId = "-1002040334789";

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });

      if (file) {
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("document", file);

        await axios.post(
          `https://api.telegram.org/bot${botToken}/sendDocument`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendTelegramMessage();
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    setFile(null);
    setPrivacyPolicy(false);
    notify();
  };

  const notify = () => {
    toast.info("Sorovingiz jonatildi");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email pochtangiz"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Tashkilot nomi"
          value={formData.company}
          onChange={handleChange}
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Aloqa uchun telefon raqamingiz"
          value={formData.phone}
          onChange={handleChange}
          className="px-4 py-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Qo'shimcha ma'lumot"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 border rounded"
          rows="4"
          required
        />
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className="px-4 py-2 border rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={privacyPolicy}
            onChange={handleCheckboxChange}
            className="border rounded"
            required
          />
          <span>Я принимаю политику конфиденциальности*</span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-[#405D72] text-white px-4 py-2 rounded"
        disabled={!privacyPolicy || isSubmitting}
      >
        {isSubmitting ? "Jonatilmoqda..." : "Jonatish"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default OrderForm;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }