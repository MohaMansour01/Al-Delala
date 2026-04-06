"use client";

import { useState } from "react";
import SignupForm from "@/src/features/auth/components/SignupForm";

export default function SignupClient() {
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    password: string;
  } | null>(null);
  return <SignupForm onSignup={setSubmittedData} />;
}
