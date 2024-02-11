"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitcher";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-center bg-brown p-2 overflow-x-hidden">
      {/* Logo */}{" "}
      <ul className={`flex gap-2 sm:gap-6 items-center bg-brown`}>
        {/* Watches */}
        <li>
          <Link
            className={`nav-link max-[400px]:text-xl text-2xl font-bold underline-offset-4 hover:underline ${
              pathname === "/watches" ? "underline" : ""
            }`}
            href="/watches"
          >
            Watches
          </Link>
        </li>
        {/* Title */}
        <li>
          <Link href="/" className="flex items-center w-full md:gap-2 nav-bg">
            <Image
              src="/watch-svgrepo-com.svg"
              width={50}
              height={50}
              className="p-1 bg-cover bg-center"
              alt="logo"
            />
            <div className="text-lg md:text-5xl uppercase block font-bold nav-title">
              WatchStore
            </div>
          </Link>
        </li>
        {/* Imports */}
        <li>
          <Link
            className={`nav-link max-[400px]:text-xl text-2xl font-bold underline-offset-4 hover:underline ${
              pathname === "/imports" ? "underline" : ""
            }`}
            href="/imports"
          >
            Imports
          </Link>
        </li>
        {/* <ThemeSwitcher /> */}
      </ul>
    </nav>
  );
};

export default Nav;
