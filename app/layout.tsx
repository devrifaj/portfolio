import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/context/appContext";
import { SkeletonTheme } from "react-loading-skeleton";

/* portfolio's title */
export const metadata: Metadata = {
  title: "Rifajul's Portfolio",
  description: "Modern and minimalistic portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <SkeletonTheme baseColor="var(--bg-5)" highlightColor="var(--neutral-300)">
          <AppProvider>{children}</AppProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
