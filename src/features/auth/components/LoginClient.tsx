"use client";

import { useState } from "react";
import LoginForm from "@/src/features/auth/components/LoginForm";

export default function LoginClient() {
  const [submittedData, setSubmittedData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  return <LoginForm onLogin={setSubmittedData} />;
}
