import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/headerFooter/Header";
import ScrollButton from "./_components/buttons/ScrollButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={` text-primary`}>
        <Header />
        <ScrollButton />
        {children}
      </body>
    </html>
  );
}
