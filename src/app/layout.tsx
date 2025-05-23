import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollTop";
export const metadata: Metadata = {
  title: "Pixeleye",
  description: "Creative stories that give goosebumps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <ScrollToTop/>
        <NavbarWrapper />
        
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
