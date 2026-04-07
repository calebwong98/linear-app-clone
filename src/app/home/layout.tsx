import Header from "./_layout/Header";
import Footer from "./_layout/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-full">{children}</main>
      <Footer />
    </>
  );
}
