import Form from "@/components/Form/Form";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title:
    "Video Sharhlar - Oltiariq Innovatsion Markazi: Mahsulotlarimizni Ko‘rib Chiqish",
  description:
    "Oltiariq Innovatsion Markazi mahsulotlariga oid video sharhlar va mijozlar tajribalari. Mahsulotlarimizni real hayotda qanday ishlashini bilib oling va ular haqida to'liqroq ma'lumotlarga ega bo'ling.",
};

const VideoReviews = ({ params: { lang } }) => {
  unstable_setRequestLocale(lang);
  const videos = [
    {
      title: "Oltiariq innovatsion markazi mahsulotlari o'rnatilmoqda",
      url: "https://www.youtube.com/embed/4yYL4e4eJIM?si=OzaSqnDoHGVqUxG3",
    },
    {
      title: "LED yo'l belgilarini tanlash va ishlab chiqarish jarayonlari",
      url: "https://www.youtube.com/embed/SlaHMr1gA2M?si=BE8-nXVUNEyUXxBz",
    },
    {
      title: "Yo'l xavfsizligi Svetaforlari ECO shaxarlarda o'rnatilmoqda",
      url: "https://www.youtube.com/embed/a5yXB4MDRdg",
    },
    {
      title: "Samonaviy va LED svetaforlari tanlash va o'rnatish",
      url: "https://www.youtube.com/embed/KwoEmhuEpU4?si=jCtXuDdLDI-IxmOD",
    },
    {
      title: "Yo'l xavfsizlik oynalarini tanlash va o'rnatish",
      url: "https://www.youtube.com/embed/h45ou4_K1vI?si=eDPM3OPF0qleevKw",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="text-sm mb-4">
        <Link href={"/"} className="text-[#121212] hover:underline">
          Bosh sahifa
        </Link>{" "}
         <span>Video sharhlar</span>
      </div>
      <h1 className="text-3xl font-semibold mb-8">Video sharhlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="video-card shadow-xl">
            <iframe
              width="100%"
              height="200"
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mb-2"
            ></iframe>
            <div className="p-5">
              <h3 className="text-lg font-medium">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <Form />
    </div>
  );
};

export default VideoReviews;
