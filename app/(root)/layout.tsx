import Header from "@/components/shared/Header";
import ScrollProgressButton from "@/components/shared/ScrollProgressButton";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="z-10 relative container">{children}</main>
      <Footer />

      <ScrollProgressButton/>
    </div>
  );
}
