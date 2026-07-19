import Image from "next/image";

const DAYS = [
  { day: "Monday", hours: "8:00 AM – 8:00 PM", closed: false },
  { day: "Tuesday", hours: "8:00 AM – 8:00 PM", closed: false },
  { day: "Wednesday", hours: "8:00 AM – 8:00 PM", closed: false },
  { day: "Thursday", hours: "8:00 AM – 8:00 PM", closed: false },
  { day: "Friday", hours: "8:00 AM – 8:00 PM", closed: false },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

function Timings() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Monday=0
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Library Timings</h1>
          <p className="text-lg font-semibold text-slate-500">Plan your visit with our weekly schedule</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="mb-4 pb-4 border-b border-slate-100">
              <div className="text-sm text-slate-500">
                Today: {DAYS[todayIdx].day}
              </div>
              <div className="mt-1 text-xl font-bold text-slate-900">
                {DAYS[todayIdx].hours}
              </div>
              <div
                className={`mt-2 inline-flex items-center gap-2 text-sm font-medium ${
                  DAYS[todayIdx].closed ? "text-red-600" : "text-emerald-600"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    DAYS[todayIdx].closed ? "bg-red-500" : "bg-emerald-500"
                  }`}
                />
                {DAYS[todayIdx].closed ? "Currently Closed" : "Currently Open"}
              </div>
            </div>
            <ul className="divide-y divide-slate-100">
              {DAYS.map((d, i) => {
                const active = i === todayIdx;
                return (
                  <li
                    key={d.day}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg ${
                      active ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          d.closed ? "bg-red-500" : "bg-emerald-500"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          active ? "text-blue-700" : "text-slate-700"
                        }`}
                      >
                        {d.day}
                      </span>
                    </div>
                    <span
                      className={`text-sm ${
                        active
                          ? "text-blue-700 font-semibold"
                          : "text-slate-500"
                      }`}
                    >
                      {d.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="font-semibold text-amber-800 text-sm">
                Holiday Notice
              </div>
              <p className="mt-1 text-sm text-amber-700">
                The library will be closed on public holidays. Please check our
                notices section for specific dates.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-end rounded-2xl overflow-hidden shadow-sm min-h-[360px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
              alt="Library Reading Space"
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            <div className="relative p-8 h-full flex flex-col justify-end min-h-[360px]">
              <h3 className="text-2xl font-bold text-white">
                Visit Us Anytime
              </h3>
              <p className="mt-2 text-slate-200">
                Experience our comfortable and modern reading environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timings