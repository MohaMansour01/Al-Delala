"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import logo from "../assets/images/Al-Delala-Logo.png";

const footerLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصل بنا" },
  { href: "/terms", label: "الشروط" },
  { href: "/privacy", label: "سياسة الخصوصية" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F1E5] text-[#1f2937] border-t border-[#EADBC8] mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-12">

        <div className="flex flex-col items-center text-center gap-4">
          <Image src={logo} alt="logo" width={120} height={40} priority />
          <p className="text-sm text-[#4B4B4B] max-w-xs">
            الدلالة - منصة السوق الحديثة التي تربط المشترين والبائعين بسهولة، ثقة، وكفاءة
          </p>

          <div className="flex gap-4 mt-2 justify-center text-[#1f2937]">
            <Link href="" target="_blank" aria-label="TikTok" className="hover:text-[#C6A15B] transition-colors text-2xl">
              <SiTiktok />
            </Link>
            <Link href="" target="_blank" aria-label="Instagram" className="hover:text-[#C6A15B] transition-colors text-2xl">
              <FaInstagram />
            </Link>
            <Link href="" target="_blank" aria-label="Facebook" className="hover:text-[#C6A15B] transition-colors text-2xl">
              <FaFacebookF />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-center">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1f2937] font-semibold hover:text-[#C6A15B] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>

      <div className="border-t border-[#EADBC8] mt-6 py-4 text-center text-sm text-[#4B4B4B]">
        &copy; {new Date().getFullYear()} الدلالة. جميع الحقوق محفوظة
      </div>
    </footer>
  );
}