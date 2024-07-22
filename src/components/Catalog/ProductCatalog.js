import { useTranslations } from "next-intl";
import Image from "next/image";

const ProductCatalog = () => {
  const t = useTranslations("ProductCatalog");
  return (
    <div className="bg-[#ffffff]">
      <div className="container">
        <div className="text-center mb-16">
          <h4 className="font-semibold text-2xl mb-10">{t("title")}</h4>
          <p className="text-lg">{t("desc")}</p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center">
            <h4 className="mb-5 font-semibold text-xl">{t("svetofor")}</h4>
            <div className="flex flex-wrap justify-center gap-5">
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Pedestrian-signal-light-1.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Pedestrian-signal-light-2.jpg"
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="mb-5 font-semibold text-xl">{t("svetofor2")}</h4>
            <div className="flex flex-wrap justify-center gap-5">
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Non-motor-vehicle-lights.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Non-motorized-vehicles-turn-left.jpg"
                }
              />
            </div>
          </div>
          <div className="">
            <h4 className="mb-5 font-semibold text-xl text-center">
              {t("svetofor3")}
            </h4>
            <div className="flex gap-28 flex-wrap max-md:justify-center">
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/U-turn-light.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/arrow-signal-light-3.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/arrow-signal-light-2.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/arrow-signal-light-1.jpg"
                }
              />
            </div>
          </div>
          <div className="">
            <h4 className="mb-5 font-semibold text-xl text-center">
              {t("svetofor4")}
            </h4>
            <div className="flex gap-28 flex-wrap max-md:justify-center mb-10">
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Solar-yellow-flashing-light.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Mobile-solar-signal-light-1.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Mobile-solar-signal-light-2.jpg"
                }
              />
              <Image
                width={200}
                height={160}
                className="shadow-md"
                src={
                  "https://jssuntek.com/wp-content/uploads/2023/11/Mobile-solar-signal-light-3.jpg"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../../messages/${locale}.json`),
//     },
//   };
// }