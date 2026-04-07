import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Menu from "./_layout/Menu";
import { MenuProvider } from "./_layout/MenuProvider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MenuProvider>
      <Header />
      <Menu />
      <main className="flex flex-col min-h-full">{children}</main>
      <Footer />
    </MenuProvider>
  );
}
