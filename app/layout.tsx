import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk-var",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope-var",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "spark. agency | Otonom Büyüme Sistemleri",
  description:
    "Reklam yapmıyoruz. Otonom büyüme sistemleri inşa ediyoruz. AI destekli pazarlama çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
