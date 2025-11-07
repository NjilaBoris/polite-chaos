import type { Metadata } from "next";
import {
  Geist_Mono,
  Big_Shoulders_Stencil,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import ClientLayout from "@/client-layout";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polite Chaos",
  description: "MWT by NBDEV",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${spaceGrotesk.className} antialiased`}>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
