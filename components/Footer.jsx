import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brown">
      <div className="grid grid-cols-4 w-full border-t border-gold lg:px-6 p-4">
        <div className="col-span-3 flex gap-6">
          {/* Home */}
          <Link href="/" className="flex items-center w-full md:w-auto gap-2">
            <Image
              src="/watch-svgrepo-com.svg"
              width={50}
              height={50}
              className="p-1 bg-cover bg-center"
              alt="logo"
            />
            <div className="text-3xl uppercase block font-bold nav-title">
              WatchStore
            </div>
          </Link>
          <ul className="flex gap-4 text-base items-center text-gold font-semibold">
            {/* Watches */}
            <li className="underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/watches"
              >
                Watches
              </Link>
            </li>
            {/* Imports */}
            <li className="underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/imports"
              >
                Imports
              </Link>
            </li>
            {/* About */}
            <li className="underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                About
              </Link>
            </li>
            {/* Terms */}
            <li className="underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                Terms & Conditions
              </Link>
            </li>
            {/* Policy */}
            <li className="underline-offset-4 hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="#"
              >
                Shipping & Return Policy
              </Link>
            </li>
            <li className="underline-offset-4 hover:underline hover:scale-[0.94]">
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
        <div className="col-span-1 border-l border-gold text-sm flex flex-col items-center justify-center gap-1 text-gold font-semibold">
          <p>&copy; 2023 ElecScoot, Inc. All rights reserved.</p>
          <hr className="hidden w-6 border-t border-gold md:inline-block" />
          <p>Designed in Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
