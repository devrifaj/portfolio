import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeModeScript } from "flowbite-react";
import { Flowbite } from "flowbite-react";

export const metadata: Metadata = {
  title: "Rifajul's Portfolio",
  description: "Modern and minimalistic portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <ThemeModeScript />
      </head>
      <body>
        <Flowbite>
          {/* header */}
          <Header />

          {/* main */}
          <main className="z-10 relative container">{children}</main>
        </Flowbite>
      </body>
    </html>
  );
}
