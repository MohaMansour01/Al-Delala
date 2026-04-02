"use client";

import { useState } from "react";
import SignupForm from "@/src/features/auth/components/SignupForm";

export default function SignupPage() {
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    password: string;
  } | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <SignupForm onSignup={setSubmittedData} />
    </section>
  );
}