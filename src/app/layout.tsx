import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SplashScreen } from "@/components/splash/SplashScreen";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LENARD DESIGNS - Agency",
  description:
    "Lenard Designs pioneers the intersection of visionary aesthetics and rigorous technical execution, forging digital experiences that define the next era of human-computer interaction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} dark h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Material Symbols is an icon font not available via next/font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full selection:bg-soft-white selection:text-obsidian-base">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}