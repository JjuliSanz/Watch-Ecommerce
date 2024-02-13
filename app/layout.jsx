import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Providers from "@/provider/providers";

export const metadata = {
  title: "Luxury Watches - Watchstore",
  description:
    "Explore an exquisite collection of Rolex watches at our next-generation e-commerce platform built with Next.js 13, powered by JavaScript. The sleek and responsive design, crafted with Tailwind CSS, provides an immersive shopping experience.",
  metadataBase: new URL("https://watch-ecommerce-main.vercel.app/"),
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
