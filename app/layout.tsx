"use client";

import { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Upland Rice Maestro",
    default: "Upland Rice Maestro",
  },
  description:
    'The rice farmer"s best companion. We provide every information you need to ensure a great harvest. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
