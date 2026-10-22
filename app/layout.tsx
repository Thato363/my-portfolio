import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thato Thobane — Portfolio",
  description: "Portfolio of Thato Thobane, full-stack developer. React, Next.js, TypeScript and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body className="min-h-screen bg-[#f5f6f4] font-[var(--font-geist-sans)] text-[#182b2b] antialiased">
        <div className="min-h-screen lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)]">
          <Navbar />
          <main className="min-w-0 pb-24 lg:col-start-2 lg:pb-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
