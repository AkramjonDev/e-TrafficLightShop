import Image from "next/image";
import img1 from "../../public/assets/IMG_20220525_101847.jpg";
import img2 from "../../public/assets/loyihalashtirish.jpg";
import img3 from "../../public/assets/loyihalashtirish2.jpg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const ProductionPage = ({ lang }) => {
  unstable_setRequestLocale(lang);

  const t = useTranslations("productionPage");
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#121212] mb-4">
            {t("title1")}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{t("desc1")}</p>
          <Link
            href="#process"
            className="site-btn bg-[#008dff] text-white py-2 px-6 rounded-full"
          >
            {t("title2")}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src={img1}
            alt="Ishlab chiqarish jarayoni"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
          <p className="text-lg text-gray-700 text-center mt-2 italic">
            {t("desc2")}
          </p>
        </div>

        {/* Introduction Section */}
        <section id="process" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            {t("title3")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{t("desc3")}</p>
        </section>

        {/* Step-by-Step Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-[#121212]">
            {t("title4")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src={img3}
                alt="Loyihalashtirish va rejalashtirish"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#121212]">
                {t("title5")}
              </h3>
              <p className="text-gray-600">{t("desc4")}</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src={img2}
                alt="Materiallar tayyorlash"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#121212]">
                {t("title6")}
              </h3>
              <p className="text-gray-600">{t("desc5")}</p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            {t("title7")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{t("desc6")}</p>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/G-vwLr2FaYI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-2"
          ></iframe>
        </section>

        {/* Case Studies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            {t("title8")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{t("desc7")}</p>
          <Link
            href="tel:+998931144362"
            className="site-btn bg-[#008dff] text-white py-2 px-6 rounded-full"
          >
            {t("btnTitle")}
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            {t("title9")}
          </h2>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t("accTitle")}
            </div>
            <div className="collapse-content">
              <p>{t("accDesc")}</p>
            </div>
          </div>
          <div className="mb-5"></div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t("accTitle2")}
            </div>
            <div className="collapse-content">
              <p>{t("accDesc2")}</p>
            </div>
          </div>
          <div className="mb-5"></div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t("accTitle3")}
            </div>
            <div className="collapse-content">
              <p>{t("accDesc3")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductionPage;
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }

// I need this please do not touch !
{
  /* Step 3 */
}
{
  /* <div className="flex flex-col items-center text-center">
              <Image
                src="/images/step-production.jpg"
                alt="Ishlab chiqarish"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#121212]">
                Ishlab chiqarish
              </h3>
              <p className="text-gray-600">
                Mahsulotlarimizni eng yangi uskunalar yordamida yig'amiz.
              </p>
            </div> */
}

{
  /* Step 4 */
}
{
  /* <div className="flex flex-col items-center text-center">
              <Image
                src="/images/step-quality-control.jpg"
                alt="Sifat nazorati"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#121212]">
                Sifat nazorati
              </h3>
              <p className="text-gray-600">
                Har bir mahsulot sifat standartlariga mosligini tekshiramiz.
              </p>
            </div> */
}

{
  /* Step 5 */
}
{
  /* <div className="flex flex-col items-center text-center">
              <Image
                src="/images/step-packaging.jpg"
                alt="Qadoqlash va yetkazib berish"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#121212]">
                Qadoqlash va yetkazib berish
              </h3>
              <p className="text-gray-600">
                Mahsulotlarimizni xavfsiz qadoqlash va yetkazib berish.
              </p>
            </div> */
}

{
  /* Quality Control Section */
}
{
  /* <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            Sifat nazorati
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Biz sifatni har bir bosqichda nazorat qilamiz. Har bir mahsulot eng
            yuqori sifat standartlariga mosligini ta'minlash uchun sinovdan
            o'tkaziladi. Sifat nazorati bizning samarali va ishonchli
            mahsulotlarimizning asosiy kafolatidir.
          </p>
          <Image
            src="/images/quality-control.jpg"
            alt="Sifat nazorati"
            width={700}
            height={400}
            className="object-cover rounded-lg mx-auto"
          />
        </section> */
}

{
  /* Production Capacity Section */
}
{
  /* <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            Ishlab chiqarish quvvatlari
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Bizning ishlab chiqarish quvvatlarimiz zamonaviy uskunalar va ilg‘or
            texnologiyalar bilan jihozlangan. Bu bizga yuqori hajmli
            buyurtmalarni tez va samarali bajarishga imkon beradi.
          </p>
          <Image
            src="/images/production-facilities.jpg"
            alt="Ishlab chiqarish quvvatlari"
            width={700}
            height={400}
            className="object-cover rounded-lg mx-auto"
          />
        </section> */
}

{
  /* Testimonials Section */
}
{
  /* <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#121212]">
            Mijozlarimiz Nima Deydi
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            "Biz bu kompaniyaning ishlab chiqarish jarayonidan juda mamnunmiz.
            Har bir mahsulot sifatli va ishonchli." — <em>Mijoz Fikri</em>
          </p>
          <Image
            src="/images/customer-feedback.jpg"
            alt="Mijozlarimiz Nima Deydi"
            width={700}
            height={400}
            className="object-cover rounded-lg mx-auto"
          />
        </section> */
}
