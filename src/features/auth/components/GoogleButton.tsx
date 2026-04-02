export default function GoogleButton() {
  return (
    <button
      className="flex cursor-pointer items-center justify-center gap-3 w-full max-w-xs px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all"
    >
      <span className="font-bold text-[13px]">التسجيل بواسطة جوجل</span>
      <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.3 0 6.2 1.2 8.5 3.1l6.3-6.3C34.9 2.4 29.8 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.4 5.7C12 12.2 17.5 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.1 24.5c0-1.7-.2-3.3-.5-4.9H24v9.3h12.4c-.5 2.7-2 5-4.2 6.6l6.5 5c3.8-3.5 6-8.6 6-16z"/>
        <path fill="#FBBC05" d="M10 28.9c-1-2.7-1-5.6 0-8.3l-7.4-5.7C.9 18.1 0 21 0 24s.9 5.9 2.6 9.1l7.4-5.7z"/>
        <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-6.5-5c-2 1.4-4.6 2.3-9.3 2.3-6.5 0-12-2.7-14.9-6.6l-7.4 5.7C6.5 42.6 14.6 48 24 48z"/>
      </svg>
      
    </button>
  );
}