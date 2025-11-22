import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ChatWidget from "@/components/ChatWidget";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ragsites - AI Powered Template",
  description: "Next.js AI Website Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <Sidebar />
        <main style={{ marginLeft: '60px', minHeight: '100vh' }}>
          {children}
        </main>
        <ChatWidget />
      </body>
    </html>
  );
}
