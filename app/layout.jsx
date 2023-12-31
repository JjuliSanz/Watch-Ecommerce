import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Providers from "@/provider/providers";

export const metadata = {
  title: "Watchstore",
  description: "Luxury watches ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background">
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
