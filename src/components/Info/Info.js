import { useTranslations } from "next-intl";

const Info = () => {
  const t = useTranslations("Info");
  return (
    <div>
      <div className="bg-[#F3F4F6]">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-base lg:text-lg">{t("desc")}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }
