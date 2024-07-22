import AboutPage from "@/components/AboutPage";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "uz" }];
}

export default function About({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  const t = useTranslations("AboutPage");

  if (!lang) {
    notFound();
  }

  return (
    <div className="bg-[#fff]">
      <div>
        <div className="text-sm mb-4 container mx-auto px-4">
          <Link href="/" className="text-[#121212] hover:underline">
            {t("link")}
          </Link>{" "}
          <span>{t("span")}</span>
        </div>
        <h1 className="font-bold text-3xl my-10 container mx-auto px-4">
          {t("title")}
        </h1>
        <div className="mb-10 border-b border-gray-300"></div>
        <AboutPage lang={lang} />
      </div>
    </div>
  );
}
