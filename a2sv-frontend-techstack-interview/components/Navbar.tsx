"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Hospitals",
      href: "/",
    },
    {
      name: "Doctors",
      href: "/",
    },
  ];

  return (
    <header className="pl-5 2xl:max-w-9/10 mx-auto font-bold pr-7.5 py-1.2 flex justify-between items-center">
      <Link href="/" className="flex gap-1.5 items-center">
        <Image src="/assets/logo.svg" height={39} width={39} alt="logo" />

        <p className="text-7.6 text-custom-black">
          Hakim <span className="text-custom-red">Hub</span>
        </p>
      </Link>

      {/* desktop */}
      <nav className="md:block hidden text-custom-black text-4.5">
        <ul className="flex items-center gap-2 lg:gap-12.5">
          {links.map((link) => (
            <li key={link.name} className="p-2.5">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:flex gap-2.5 hidden md:gap-4.6 items-center">
        <div className="md:size-12.5 size-10 bg-[#ACADC8] text-lg text-white grid place-items-center rounded-full">
          K
        </div>

        <button
          className="rounded-3xl border py-1.2 px-4.55 font-normal text-sm border-log-out-border"
          onClick={() => alert("logged out")}
        >
          Log out
        </button>
      </div>

      {/* mobile */}
      <button
        className="md:hidden"
        onClick={() => setIsMenu((value) => !value)}
      >
        <Image
          src={isMenu ? "/assets/close.svg" : "/assets/menu.svg"}
          width={30}
          height={30}
          alt="menu icon"
        />
      </button>

      {isMenu && (
        <div className="fixed grid place-items-center bg-white/95 w-svw h-svh top-16 right-0 z-20">
          <div className="flex flex-col gap-4 justify-start mb-16">
            <nav className="md:hidden text-custom-black text-4.5">
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.name} className="p-2.5">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:hidden gap-2.5 flex items-center">
              <div className="size-12.5 bg-[#ACADC8] text-lg text-white grid place-items-center rounded-full">
                K
              </div>

              <button
                className="rounded-3xl border py-1.2 px-4.55 font-normal text-sm border-log-out-border"
                onClick={() => alert("logged out")}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
