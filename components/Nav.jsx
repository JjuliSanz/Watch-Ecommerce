"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-center nav-bg p-2 gap-6">
      {/* Logo */}{" "}
      <ul className={`flex gap-6 items-center bg-[#391b00]`}>
        <li>
          <Link
            className={`nav-link text-2xl font-bold underline-offset-4  hover:underline ${
              pathname === "/watches" ? "underline" : ""
            }`}
            href="/watches"
          >
            Watches
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center w-full md:w-auto gap-2">
            <Image
              src="/watch-svgrepo-com.svg"
              width={50}
              height={50}
              className="p-1 bg-cover bg-center"
              alt="logo"
            />
            <div className="text-5xl uppercase block font-bold nav-title">
              WatchStore
            </div>
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link text-2xl font-bold underline-offset-4 hover:underline ${
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
