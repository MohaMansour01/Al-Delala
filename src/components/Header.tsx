"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/Al-Delala-Logo.png";

const navItems = [
  { href: "/electronics", label: "الالكترونيات" },
  { href: "/services", label: "الخدمات" },
  { href: "/cars", label: "السيارات" },
  { href: "/furniture", label: "الأثاث المنزلي" },
  { href: "/real-estate", label: "العقارات" },
  { href: "/", label: "الرئيسية" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F8F1E5] text-gray-700 font-semibold shadow-sm border-b border-[#EADBC8]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image src={logo} alt="logo" width={120} height={40} priority />

        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="block w-full py-2 transition-colors hover:text-[#C6A15B]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="flex items-center gap-1 py-2 px-2 rounded-lg transition-all duration-300 hover:bg-[#C6A15B]/20 hover:text-[#C6A15B] transform hover:scale-105"
            >
              <FaUserCircle className="w-6 h-6" />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/login"
            className="flex items-center gap-1 p-2 rounded-lg transition-all duration-300 hover:bg-[#C6A15B]/20 hover:text-[#C6A15B]"
          >
            <FaUserCircle className="w-6 h-6" />
          </Link>

          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 text-[#1f2937]" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-[#1f2937]" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-max-h duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-4 text-right">
          {[...navItems].reverse().map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="block w-full py-2 transition-colors hover:text-[#C6A15B]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
