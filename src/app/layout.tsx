import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SplashScreen } from "@/components/splash/SplashScreen";
import { PageTransition } from "@/components/transitions/PageTransition";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lenarddesigns.com"),
  title: "Lenard Designs — Design and engineering studio in Maryland",
  description:
    "Lenard Designs is an independent design and engineering studio in Maryland. We design and build websites, mobile apps and startup MVPs: strategy, interface design and front-end engineering from one team.",
  openGraph: {
    images: ["/LenardDesigns.png"],
  },
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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}