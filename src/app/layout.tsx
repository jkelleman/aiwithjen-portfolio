import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Jen Kelleman: semantic layers, prompt infrastructure, and autonomous AI systems for the enterprise.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiwithjen.com"),
  title: {
    default: "Jen Kelleman — Content Design Engineering & AI Systems Architecture",
    template: "%s",
  },
  description,
  openGraph: {
    type: "website",
    url: "https://aiwithjen.com",
    siteName: "aiwithjen.com",
    title: "Jen Kelleman — Content Design Engineering & AI Systems Architecture",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jen Kelleman — Content Design Engineering & AI Systems Architecture",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-ink">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
