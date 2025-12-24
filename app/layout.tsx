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
  icons: {
    icon: "/arianaWebLogo.jpeg",
    shortcut: "/arianaWebLogo.jpeg",
    apple: "/arianaWebLogo.jpeg",
  },
  title: "Ariana",
  description: "Ariana is a modern, scalable platform delivering powerful digital solutions with performance, security, and innovation at its core.",
};

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
