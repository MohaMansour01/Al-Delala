import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "الدلالة - Al-Delala",
  description:
    "الدلالة هي منصة سوق إلكترونية متكاملة تهدف إلى تسهيل عمليات البيع والشراء من خلال تجربة سلسة وآمنة. تُمكِّن المستخدمين من عرض منتجاتهم وخدماتهم، استكشاف العروض، والتواصل المباشر بثقة وكفاءة — مع تركيز خاص على السوق السوداني واحتياجاته المتنامية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
