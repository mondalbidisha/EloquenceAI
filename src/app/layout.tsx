import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "../utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EloquenceAI",
  description: "Enhance your writing with our AI-powered assistant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames("bg-lime-950", inter.className)}>
        {children}
      </body>
    </html>
  );
}