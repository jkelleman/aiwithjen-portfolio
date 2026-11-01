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
  title: "Jen Kelleman — Content Design Engineering & AI Systems Architecture",
  description:
    "Portfolio of Jen Kelleman: semantic layers, prompt infrastructure, and autonomous AI systems for the enterprise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
