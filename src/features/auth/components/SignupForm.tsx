"use client";

import { useState } from "react";
import { signupUser } from "../api";
import Link from "next/link";
import GoogleButton from "./GoogleButton";

type Props = {
  onSignup: (data: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
};

export default function SignupForm({ onSignup }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmedPassword) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    try {
      await signupUser({ fullName, email, password });

      onSignup({
        fullName,
        email,
        password,
      });

      // reset
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmedPassword("");
      setError(null);
    } catch (err) {
      setError("حدث خطأ أثناء إنشاء الحساب");
    }
  }

  return (
    <section className="w-full min-h-screen bg-[#FDFBF9] flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-[#E2E8F0] shadow-lg rounded-xl p-6 space-y-6"
        dir="rtl"
      >
        <div className="text-right space-y-2">
          <h2 className="text-2xl font-black text-[#0F172A]">
            إنشاء حساب جديد
          </h2>
          <p className="text-sm text-[#475569]">
            انضم إلى أكبر سوق عربي اليوم وابدأ التداول بكل سهولة.
          </p>
        </div>

        <div className="flex justify-center">
          <GoogleButton />
        </div>

        <div className="flex items-center">
          <div className="flex-1 border-t border-[#E2E8F0]" />
          <span className="px-4 text-sm text-[#94A3B8]">
            أو البريد الإلكتروني
          </span>
          <div className="flex-1 border-t border-[#E2E8F0]" />
        </div>

        <div className="flex flex-col gap-2 text-right">
          <label className="text-sm font-semibold text-[#334155]">
            الاسم الكامل
          </label>
          <input
            type="text"
            placeholder="أدخل اسمك الكامل"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2 text-right">
          <label className="text-sm font-semibold text-[#334155]">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2 text-right">
          <label className="text-sm font-semibold text-[#334155]">
            كلمة المرور
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-[#64748B] mt-2">
            يجب أن تتكون من 8 أحرف على الأقل.
          </p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <label className="flex items-center gap-2 mt-3 text-sm text-[#475569]">
          <input
            type="checkbox"
            className="w-4 h-4 border border-[#CBD5E1] rounded"
          />
          <p className="text-sm text-[#64748B] text-center leading-relaxed">
            أوافق على{" "}
            <Link
              href="/terms"
              className="text-[#A56D2C] font-medium hover:underline"
            >
              شروط الخدمة
            </Link>{" "}
            و{" "}
            <Link
              href="/privacy"
              className="text-[#A56D2C] font-medium hover:underline"
            >
              سياسة الخصوصية
            </Link>
          </p>
        </label>

        <button
          type="submit"
          className="w-full h-12 cursor-pointer bg-[#A56D2C] text-white rounded-lg transition"
        >
          إنشاء حساب مجاني
        </button>

        <p className="text-sm text-center text-[#475569]">
          لديك حساب بالفعل؟{" "}
          <Link
            href="/login"
            className="text-[#A56D2C] font-medium hover:underline"
          >
            تسجيل الدخول
          </Link>
        </p>

        <div className="flex justify-center items-center text-center">
          <span className="w-[327.78px] h-[20px] text-center font-semibold text-[13px] leading-[20px] text-[#a9afb9]">
            بإنشائك للحساب، أنت توافق على تلقي تحديثات من سوقنا.
          </span>
        </div>
      </form>
    </section>
  );
}
