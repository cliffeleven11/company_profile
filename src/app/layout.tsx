import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cliff Eleven | Digital Solutions & Innovation",
  description: "Cliff Eleven adalah perusahaan teknologi terdepan yang menyediakan solusi digital inovatif untuk bisnis Anda. Kami mengkhususkan diri dalam pengembangan web, aplikasi mobile, dan transformasi digital.",
  keywords: "digital agency, web development, mobile app, software development, Indonesia, teknologi, solusi digital",
  authors: [{ name: "Cliff Eleven" }],
  openGraph: {
    title: "Cliff Eleven | Digital Solutions & Innovation",
    description: "Solusi digital inovatif untuk bisnis Anda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
