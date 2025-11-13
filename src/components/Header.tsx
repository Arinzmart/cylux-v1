"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={` border-b border-white/10 hidden  transition-all duration-300 py-2 ${
          isScrolled || isOpen
            ? "lg:hidden transition-all"
            : "lg:block transition-all"
        }`}
      >
        <div className="container mx-auto flex justify-end items-center px-4 text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+234 80 733 45636</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://web.facebook.com/share/v/17G1xVJSp7/"
                className="hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://www.instagram.com/p/DQ-Hn3EjEm9/?igsh=YzAyMDM1MGJkZA=="
                className="hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="font-protest text-3xl text-brand-accent">
          <Link href="/">CYLUX</Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={`font-serif  text-sm  relative group ${
                  pathname === link.href ? "text-brand-accent" : ""
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-[-4px] left-0 h-px bg-brand-accent group-hover:w-full transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                ></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/reservations">
            <span className="border border-white text-brand-white font-sans tracking-widest px-4 py-2 text-sm  transition-all">
              Reservations
            </span>
          </Link>
          <a
            href="https://wa.me/+2348073345636"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-background font-sans tracking-widest  px-4 py-2 text-sm hover:bg-opacity-80 transition-all"
          >
            Order Now
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-background z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-serif text-md text-white tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className=" text-center">
            <Link href="/reservations">
              <span
                className="block border my-4 border-brand-accent text-brand-accent font-sans tracking-widest uppercase px-8 py-3 text-md hover:bg-brand-accent hover:text-background transition-all"
                onClick={() => setIsOpen(false)}
              >
                Reservations
              </span>
            </Link>
            <a
              href="https://wa.me/+2348073345636"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-accent text-background font-sans tracking-widest uppercase px-8 py-3 text-md hover:bg-opacity-80 transition-all"
            >
              Order Now
            </a>
            <div className="flex items-center justify-center space-x-6 pt-8">
              <a
                href="#"
                className="text-white hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-brand-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 pt-8 text-lg">
              <Phone size={20} />
              <span>+234 80 733 45636</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
