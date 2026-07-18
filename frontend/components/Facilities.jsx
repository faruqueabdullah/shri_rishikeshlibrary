import Image from "next/image";
import { FaParking } from "react-icons/fa";
import { FiDroplet, FiPackage, FiUsers } from "react-icons/fi";

const FACILITIES = [
  {
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
    title: "Digital Library",
    desc: "Access thousands of e-books, journals, and digital resources with our integrated online platform",
  },
  {
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    title: "Climate-Controlled Reading Areas",
    desc: "Comfortable air-conditioned spaces designed to enhance your focus and productivity",
  },
  {
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    title: "Modern Cafeteria",
    desc: "From the lobby to the rooftop, witness the beauty of knowledge in every corner of our library",
  },
  {
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    title: "High-Speed Wi-Fi",
    desc: "Seamless connectivity throughout the premises for all your research needs",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    title: "Private Study Cabins",
    desc: "Dedicated individual study spaces for focused learning and research work",
  },
  {
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    title: "24/7 Security",
    desc: "Round-the-clock CCTV surveillance ensuring a safe learning environment",
  },
];

const AMENITIES = [
  { icon: FaParking, label: "Free Parking" },
  { icon: FiDroplet, label: "Drinking Water" },
  { icon: FiPackage, label: "Secure Lockers" },
  { icon: FiUsers, label: "Separate Areas" },
];

function Facilities() {
  return (
    <section id="facilities" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
              Our Facilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Exclusive Premium Facilities
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg self-end">
            Our world-class amenities include a boutique of unique learning
            spaces and modern facilities with integrated views. Every corner is
            meticulously designed to create an exceptional environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  fill
                  className=" group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {AMENITIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-4"
            >
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                <Icon size={18} />
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Facilities