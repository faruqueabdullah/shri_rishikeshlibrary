import { FiArrowRight } from "react-icons/fi";

const TAG_COLORS = {
  Featured: "bg-blue-100 text-blue-700",
  New: "bg-emerald-100 text-emerald-700",
  Important: "bg-amber-100 text-amber-700",
  Event: "bg-purple-100 text-purple-700",
};

const notices = [
  {
    tag: "Featured",
    date: "May 20, 2024",
    title: "Summer Reading Program 2024",
    body: "Join our annual summer reading program with exciting prizes and activities for all ages. Register before June 15th to participate.",
    featured: true,
  },
  {
    tag: "New",
    date: "May 18, 2024",
    title: "New Digital Resources Available",
    body: "Access thousands of e-books and audiobooks through our new partnership with leading digital libraries.",
  },
  {
    tag: "Important",
    date: "May 15, 2024",
    title: "Library Timings Extended",
    body: "Starting June 1st, the library will remain open until 9 PM on weekdays to serve you better.",
  },
  {
    tag: "Event",
    date: "May 10, 2024",
    title: "Workshop: Research Skills",
    body: "Learn advanced research techniques and database navigation in our upcoming workshop series.",
  },
];

function Notices() {
  const featured = notices.find((n) => n.featured);
  const others = notices.filter((n) => !n.featured);
  return (
    <section id="notices" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Latest Notices</h1>
          <p className="text-lg font-semibold text-slate-500">Stay updated with our latest announcements and events</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <article className="bg-linear-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur">
                {featured.tag}
              </span>
              <span className="text-sm text-blue-100">{featured.date}</span>
            </div>
            <h3 className="text-2xl font-bold">{featured.title}</h3>
            <p className="mt-3 text-blue-100 leading-relaxed">
              {featured.body}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
            >
              Read More <FiArrowRight />
            </a>
          </article>
          {others.map((n) => (
            <article
              key={n.title}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${TAG_COLORS[n.tag]}`}
                >
                  {n.tag}
                </span>
                <span className="text-xs text-slate-500">{n.date}</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {n.title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">{n.body}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Read More <FiArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notices;
