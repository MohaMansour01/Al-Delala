"use client";

export default function ContactPage() {
  return (
    <div className="bg-[#F8F1E5] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-2xl p-6 sm:p-8 animate-fadeInUp relative border border-[#EADBC8]">
        
        <h1 className="text-xl sm:text-2xl font-bold text-[#bf8116] mb-4 sm:mb-6 text-right underline">
          تواصل معنا
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 text-right leading-relaxed">
          نحن هنا للإجابة على أسئلتك ومساعدتك في أي استفسار يتعلق بمنصة الدلالة.
          يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
        </p>

        <form className="space-y-4 sm:space-y-6 text-right">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-[#1f3a37] mb-1 sm:mb-3">
              الاسم الكامل
            </label>
            <input
              type="text"
              placeholder="أدخل اسمك"
              className="w-full border border-[#EADBC8] rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bf8116] bg-[#F8F1E5]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-[#1f3a37] mb-1 sm:mb-3">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-[#EADBC8] rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bf8116] bg-[#F8F1E5]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-[#1f3a37] mb-1 sm:mb-3">
              الموضوع
            </label>
            <input
              type="text"
              placeholder="موضوع الرسالة"
              className="w-full border border-[#EADBC8] rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bf8116] bg-[#F8F1E5]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-[#1f3a37] mb-1 sm:mb-3">
              الرسالة
            </label>
            <textarea
              rows={5}
              placeholder="اكتب رسالتك هنا..."
              className="w-full border border-[#EADBC8] rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bf8116] bg-[#F8F1E5]"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#bf8116] text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-[#a86d12] transition-transform transform hover:scale-105 shadow-md"
            >
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}