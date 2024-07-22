import ProductionPage from "@/components/ProductionPage";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Ishlab chiqarish - Oltiariq Innovatsion Markazi",
  description:
    "Oltiariq Innovatsion Markazining ilg‘or ishlab chiqarish jarayonlari, texnologik quvvatlari va mahsulot sifatini ta'minlash yondashuvlari bilan tanishing. Zamonaviy texnologiyalar va yuqori malakali mutaxassislar bilan samarali va sifatli ishlab chiqarishni ta'minlaymiz.",
};

const Production = ({ params: { lang } }) => {
  unstable_setRequestLocale(lang);

  const t = useTranslations("productionPage");
  return (
    <div className="bg-[#fff]">
      <div className="container">
        <div className="text-sm mb-4">
          <a href={"/"} className="text-[#121212] hover:underline">
            {t("link")}
          </a>{" "}
          <p>{t("span")}</p>
        </div>
        <ProductionPage lang={lang} />
      </div>
    </div>
  );
};

export default Production;
