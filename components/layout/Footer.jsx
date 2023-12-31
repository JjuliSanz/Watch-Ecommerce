import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brown">
      <div className="max-lg:flex max-lg:flex-col max-lg:gap-4 lg:grid lg:grid-cols-4 w-full border-t border-gold lg:px-2 lg:py-2">
        <div className="lg:col-span-3 flex max-lg:flex-col ">
          {/* Home */}
          <Link href="/" className="flex items-center max-lg:justify-center w-full lg:w-[220px]">
            <Image
              src="/watch-svgrepo-com.svg"
              width={50}
              height={50}
              className="p-1 bg-cover bg-center"
              alt="logo"
            />
            <div className="text-lg xl:text-2xl uppercase font-bold nav-title">
              WatchStore
            </div>
          </Link>
          <ul className="flex max-lg:justify-center  text-xs lg:text-base items-center text-gold font-semibold text-center">
            {/* Watches */}
            <li className="border-l border-gold px-3 h-full flex items-center underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/watches"
              >
                Watches
              </Link>
            </li>
            {/* Imports */}
            <li className="border-l border-gold px-3 h-full flex items-center underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/imports"
              >
                Imports
              </Link>
            </li>
            {/* About */}
            <li className="border-l border-gold px-3 h-full flex items-center underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                About
              </Link>
            </li>
            {/* Terms */}
            <li className="border-l border-gold px-3 h-full flex items-center underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                Terms & Conditions
              </Link>
            </li>
            {/* Policy */}
            <li className="border-l border-gold px-3 h-full flex items-center underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                Shipping & Return Policy
              </Link>
            </li>
            <li className="border-l border-gold px-3 h-full flex items-center underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Copyright */}
        <div className="col-span-1 lg:border-l border-gold text-sm flex flex-col items-center justify-center gap-1 text-gold font-semibold">
          <p>&copy; 2023 ElecScoot, Inc. All rights reserved.</p>
          <hr className="w-6 border-t border-gold" />
          <p>Designed in Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
