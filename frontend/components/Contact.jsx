"use client"

import { useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";


const CONTACT_INFO = [
  {
    icon: FiMapPin,
    title: "Address",
    body: "123 Knowledge Street, Education District, Metro City - 100001",
  },
  {
    icon: FiPhone,
    title: "Phone",
    body: "+91 98765 43210 / +91 98765 43211",
  },
  {
    icon: FiMail,
    title: "Email",
    body: "info@modernlibrary.com",
  },
  {
    icon: FiClock,
    title: "Working Hours",
    body: "Monday - Saturday: 8:00 AM - 8:00 PM",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg font-semibold text-slate-500">
           We're here to help. Reach out to us for any queries or assistance
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-5">
                {CONTACT_INFO.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="grid place-items-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900">
                        {title}
                      </div>
                      <div className="text-sm text-slate-600 mt-0.5 break-words">
                        {body}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 min-h-[220px] grid place-items-center border border-blue-100">
              <div className="text-center text-blue-700">
                <FiMapPin size={32} className="mx-auto" />
                <div className="mt-2 font-semibold">Interactive Map</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2500);
              setForm({ name: "", email: "", message: "" });
            }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { key: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
                { key: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form.value}
                    onChange={(e) =>
                      setForm({ ...form, [f.key]: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Your message here…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact