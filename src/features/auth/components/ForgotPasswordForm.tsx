"use client";

import { useState } from "react";
import { forgotPassword } from "../api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      await forgotPassword({ email });
      setMessage("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
    } catch {
      setError("تعذر إرسال رابط إعادة التعيين. حاول مرة أخرى.");
    }
  }

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-[#FDFBF9] p-6">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-6 flex flex-col gap-6"
          dir="rtl"
        >
          <div className="flex flex-col gap-2 text-right">
            <h2 className="text-2xl font-black text-[#0F172A]">
              نسيت كلمة السر؟
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              أدخل بريدك الإلكتروني المرتبط بحسابك وسنرسل لك رابطاً لاستعادة الوصول
            </p>
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

          {message && <p className="text-green-500 text-sm text-right">{message}</p>}
          {error && <p className="text-red-500 text-sm text-right">{error}</p>}

          <button
            type="submit"
            className="w-full cursor-pointer h-14 bg-[#A56D2C] text-white font-bold rounded-lg text-[16px] hover:bg-[#8c5c24] transition"
          >
            إرسال الرابط
          </button>

          <div className="w-full h-[1px] border border-gray-100"></div>

          <div className="w-full flex justify-center">
            <Link
              href="/login"
              className="flex items-center text-[#A56D2C] rounded-md transition"
              dir="rtl"
            >
              <ArrowRight className="mr-2 ml-1 w-4 h-4" />
              العودة لتسجيل الدخول
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}