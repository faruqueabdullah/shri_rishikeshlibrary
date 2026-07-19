import { FiAward, FiBook, FiHome, FiUsers } from "react-icons/fi";

const STATS = [
  { icon: FiBook, value: "500+", label: "Books" },
  { icon: FiUsers, value: "2000+", label: "Members" },
  { icon: FiHome, value: "150+", label: "Seats" },
  { icon: FiAward, value: "5+", label: "Years of Service" },
];

function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="bg-slate-50 rounded-sm p-6 sm:p-8 text-center hover:scale-100 hover:shadow-xl shadow-blue-200 transition-all duration-500"
          >
            <div className="mx-auto grid place-items-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Icon size={22} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900">
              {value}
            </div>
            <div className="text-sm text-slate-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;