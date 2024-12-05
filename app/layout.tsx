import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/ui/layout/header";

export const metadata: Metadata = {
  title: "Find the Morty",
  description: "Explore characters from the Rick and Morty universe.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
