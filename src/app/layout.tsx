import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";

import { Afacad } from 'next/font/google'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const afacad = Afacad({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
