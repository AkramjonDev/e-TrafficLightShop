import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EmployeeCard = ({ name, title, phone, email, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-[#121212] mb-7">{title}</p>
        <div className="mt-2">
          <div className="flex items-center gap-2 text-sm mb-7">
            <FontAwesomeIcon
              className="text-xl text-[#008dff]"
              icon={faPhone}
            />
            <span className="text-[#121212] text-base font-semibold">
              {phone}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1">
            <FontAwesomeIcon
              className="text-xl text-[#008dff]"
              icon={faEnvelope}
            />
            <span className="text-[#121212] text-base font-semibold">
              {email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }