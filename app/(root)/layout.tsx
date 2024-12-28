import Header from "@/components/Header";
import ScrollProgressButton from "@/components/ScrollProgressButton";
import Footer from "@/components/ui/Footer";

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
