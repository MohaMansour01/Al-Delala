export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  fullName: string;
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller" | "serviceProvider";
}