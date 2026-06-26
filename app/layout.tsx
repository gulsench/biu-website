import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BIU | AI Growth Intelligence Platform",
  description:
    "BIU measures how your brand shows up across AI answer engines, finds the one root cause behind the gap, and hands your team the next move.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1211",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <body className="min-h-screen overflow-x-hidden bg-band font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
