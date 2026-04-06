"use client";

import { useState } from "react";
import { loginUser } from "../api";
import GoogleButton from "./GoogleButton";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  onLogin?: (data: { email: string; password: string }) => void;
};

export default function LoginForm({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = await loginUser({ email, password });
    console.log(result);
    onLogin?.({ email, password });
  }

  return (
    <section className="min-h-screen w-120 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-lg bg-white border border-[#E2E8F0] shadow-lg"
      >
        <div className="mb-8 text-right">
          <h1 className="text-[30px] font-black text-[#0F172A] leading-tight tracking-tight">
            مرحباً بك مجدداً
          </h1>
          <p className="text-[16px] text-[#64748B] leading-normal mt-2">
            سجل دخولك للوصول إلى حسابك في سوقنا
          </p>
        </div>

        <div className="mb-6 flex justify-center items-center">
          <GoogleButton />
        </div>

        <div className="flex items-center mb-6">
          <div className="flex-1 border-t border-[#E2E8F0]" />
          <span className="px-4 text-sm text-[#94A3B8]">أو البريد الإلكتروني</span>
          <div className="flex-1 border-t border-[#E2E8F0]" />
        </div>

        <div className="mb-5 text-right">
          <label className="block text-sm font-semibold text-[#334155] mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6 text-right">
          <div className="flex justify-between items-center mb-2">
            <Link href="/forgot-password" className="text-xs font-semibold text-[#A56D2C] hover:underline">
              نسيت كلمة المرور؟
            </Link>
            <span className="text-sm font-semibold text-[#334155]">كلمة المرور</span>
          </div>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 px-4 pr-12 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <label className="flex items-center gap-2 mt-3 text-sm text-[#475569] justify-end">
            <input type="checkbox" className="w-4 h-4 border border-[#CBD5E1] rounded" />
            تذكرني على هذا الجهاز
          </label>

          <button
            type="submit"
            className="w-full mt-6 h-[56px] rounded-[8px] bg-[#A56D2C] text-white font-bold text-[16px] hover:bg-[#8c5c24] transition cursor-pointer"
          >
            تسجيل الدخول
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2 text-sm">
          <span className="text-[#64748B]">ليس لديك حساب؟</span>
          <Link href="/signup" className="text-[#A56D2C] font-bold hover:underline">
            إنشاء حساب جديد
          </Link>
        </div>
      </form>
    </section>
  );
}
