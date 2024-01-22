"use client"
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, MouseEvent } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    const section = document.querySelector(href) as HTMLElement;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleCloseMenu();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flexBetween max-container padding-container z-30 py-5 bg-white">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <div className={`fixed inset-0 flex items-center justify-center ${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white bg-opacity-90 z-50`}>
        <div className="bg-gray-100 border-2 border-gray-300 p-4 rounded-md">
          <ul className="flex flex-col space-y-4">
            <Image
              src={"/close.svg"}
              alt="close menu"
              width={24}
              height={24}
              className="self-end cursor-pointer border-2 border-white color"
              onClick={handleCloseMenu}
            />
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
       <ul className={`h-full gap-12 lg:flex hidden sm:flex sm:flex-row sm:space-y-0 sm:space-x-4 sm:relative`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
        />
      </div>
      <Image src="/menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </nav>
  );
};

export default Navbar;
