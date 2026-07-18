"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiBook, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const NAV = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#notices", label: "Notices" },
    { href: "#facilities", label: "Facilities" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 min-w-0">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-blue-600 text-white shrink-0">
            <FiBook size={20} />
          </span>
          <span className="font-bold text-slate-900 text-lg truncate">
            Shri Rishikesh Library
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
             <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors border-b-2 border-b-transparent hover:border-b-blue-600 py-3"
              >
                {n.label}
              </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-slate-100">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
