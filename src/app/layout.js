"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up");

  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <body>
          {!isAuthPage && <Header />}
          {children}
          {!isAuthPage && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  );
}