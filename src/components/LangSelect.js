"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const languages = {
  uz: "UZ",
  ru: "RU",
};

export default function LangSelect() {
  const router = useRouter();
  const path = usePathname();
  const localActive = useLocale();
  const [show, setShow] = useState(false);

  const handleChange = (lang) => {
    router.replace(`/${lang}/${path.slice(4)}`);
    setShow(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        type="button"
        onClick={() => setShow(!show)}
      >
        {languages[localActive]}
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${show ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-200 ease-out ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="py-1 text-sm text-gray-700">
          {Object.keys(languages).map((lang) => (
            <li key={lang}>
              <button
                type="button"
                className={`block w-full px-4 py-2 text-left transition-colors duration-150 ${lang === localActive ? "bg-gray-100 text-blue-500" : "hover:bg-blue-100"}`}
                onClick={() => handleChange(lang)}
              >
                {languages[lang]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
