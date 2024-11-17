import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

/* portfolio's title */
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
        {/* Preload saved theme to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        {/* Header start from here */}
        <Header />

        {/* Main start from here */}
        <main className="z-10 relative container">{children}</main>

        {/* Footer start from here */}
        <Footer />
      </body>
    </html>
  );
}
