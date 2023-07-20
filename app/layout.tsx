import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tienda de guitarras",
  description: "Proyecto final Diplomatura frontend UTN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
