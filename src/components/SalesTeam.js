import EmployeeCard from "./EmployeeCard";
import userImg from "../../public/assets/User-avatar.svg.png";

const salesTeamData = [
  {
    name: "Ism Familiya",
    title: "менеджер",
    phone: "+998931144362",
    email: "oltiariqinnovatsionmarkazi7@gmail.com",
    image: userImg.src,
  },
  {
    name: "Ism Familiya",
    title: "менеджер",
    phone: "+998931144362",
    email: "oltiariqinnovatsionmarkazi7@gmail.com",
    image: userImg.src,
  },
  {
    name: "Ism Familiya",
    title: "менеджер",
    phone: "+998931144362",
    email: "oltiariqinnovatsionmarkazi7@gmail.com",
    image: userImg.src,
  },
  {
    name: "Ism Familiya",
    title: "менеджер",
    phone: "+998931144362",
    email: "oltiariqinnovatsionmarkazi7@gmail.com",
    image: userImg.src,
  },
];

const SalesTeam = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-8">bizning xodimlarimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {salesTeamData.map((employee, index) => (
          <EmployeeCard key={index} {...employee} />
        ))}
      </div>
    </section>
  );
};

export default SalesTeam;
