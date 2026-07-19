"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQS = [
  {
    q: "How can I become a member?",
    a: "Visit our library with a valid ID proof, passport-size photograph, and address proof. Fill out the membership form and pay the registration fee. Your membership card will be issued immediately.",
  },
  {
    q: "What are the membership charges?",
    a: "Annual membership is ₹500 for students, ₹800 for general members, and ₹1200 for family membership. Senior citizens enjoy a 50% discount. Lifetime membership is available for ₹5000.",
  },
  {
    q: "How many books can I borrow?",
    a: "Regular members can borrow up to 3 books at a time for 14 days. Premium members can borrow up to 5 books for 21 days. Reference books and rare collections are for in-library use only.",
  },
  {
    q: "Can I renew books online?",
    a: "Yes, you can renew books through our online portal or mobile app up to 2 times, provided there are no pending reservations for that book. Login with your membership number to access the renewal feature.",
  },
  {
    q: "What happens if I return a book late?",
    a: "A late fee of ₹5 per day per book will be charged. After 30 days of overdue, membership privileges will be suspended until the book is returned and all fees are cleared.",
  },
  {
    q: "Are digital resources available?",
    a: "Yes, members have free access to our digital library with over 10,000 e-books, audiobooks, online journals, and databases. Access credentials are provided upon membership registration.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg font-semibold text-slate-500">
            Find answers to common questions about our library services
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={f.q}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 text-base">
                    {f.q}
                  </span>
                  <FiChevronDown
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                      open ? "rotate-180 text-blue-600" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
