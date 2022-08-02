import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between px-8 md:px-6 py-5 2xl:py-12 text-slate-700 w-full z-50 fixed overflow-hidden shadow-xl rounded-b-xl backdrop-blur-sm bg-opacity-90 bg-gray-300">
      <div className="container flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between px-4 mx-auto ">
        <span className="animate-
        ">
          <Image
            src="/logo.png"
            width={203}
            height={36}
            alt="logo da empresa"
          />
        </span>
        <div
          className={`w-full md:w-fit text-center overflow-hidden ${
            navbarOpen ? "h-fit" : "h-0"
          } transition`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <ul
            className="flex flex-col md:flex-row gap-5 md:gap-8 font-bold text-xl 2xl:text-5xl w-full transition"
            role="none"
          >
            <li className="decoration-gray-900 hover:scale-110 hover:underline transition">
              <Link href="/produtos">
                <a className="grid h-12 items-center px-2 w-full">Produtos</a>
              </Link>
            </li>
            <li className="decoration-gray-900 hover:scale-110 hover:underline transition">
              <Link href="/clientes">
                <a className="grid h-12 items-center px-2">Clientes</a>
              </Link>
            </li>
            <li className="decoration-gray-900 hover:scale-110 hover:underline transition">
              <Link href="/contatos">
                <a className="grid h-12 items-center px-2">Contatos</a>
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="flex fixed shadow-lg rounded-lg h-14 w-14 right-3 top-3 md:hidden"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        />
      </div>
    </nav>
  );
};

export { NavBar };
