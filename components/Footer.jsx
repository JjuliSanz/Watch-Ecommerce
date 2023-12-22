import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#391b00]">
      <div className="grid grid-cols-4 w-full border-t border-[#c88c00] lg:px-6 p-4">
        <div className="col-span-3 flex gap-6">
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
          <ul className="flex gap-4 text-base items-center footer-text">
            <li className="underline-offset-4 hover:text-white hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/watches"
              >
                Watches
              </Link>
            </li>
            <li className="underline-offset-4 hover:text-white hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/imports"
              >
                Imports
              </Link>
            </li>
            <li className="underline-offset-4 hover:text-white hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/watches"
              >
                About
              </Link>
            </li>
            <li className="underline-offset-4 hover:text-white hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/imports"
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="underline-offset-4 hover:text-white hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/watches"
              >
                Shipping & Return Policy
              </Link>
            </li>
            <li className="underline-offset-4 hover:text-white hover:underline hover:scale-[0.94]">
              <Link
                className=""
                href="/imports"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 border-l border-[#c88c00] text-sm flex flex-col items-center justify-center gap-1 footer-text">
          <p>&copy; 2023 ElecScoot, Inc. All rights reserved.</p>
          <hr className="hidden w-6 border-t border-[#c88c00] md:inline-block" />
          <p>Designed in Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
