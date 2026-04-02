"use client";

import { useState } from "react";
import LoginForm from "@/src/features/auth/components/LoginForm";

export default function LoginPage() {
  const [submittedData, setSubmittedData] = useState<{ email: string; password: string } | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <LoginForm onLogin={setSubmittedData} />
    </section>
  );
}
