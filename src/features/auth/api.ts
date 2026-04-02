import {
  LoginPayload,
  SignupPayload,
  ForgotPasswordPayload,
} from "@/src/types/auth";

export async function loginUser(payload: LoginPayload) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Login failed: ${res.status}`);
  }

  return res.json();
}

export async function signupUser(payload: SignupPayload) {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Signup failed: ${res.status}`);
  }

  return res.json();
}

export async function forgotPassword(payload: ForgotPasswordPayload) {
  const res = await fetch("/api/auth/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Forgot password failed: ${res.status}`);
  }

  return res.json();
}
