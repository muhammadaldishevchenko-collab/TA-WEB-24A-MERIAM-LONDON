// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/edukasi", label: "Edukasi Bencana" },
  { href: "/mitigasi", label: "Panduan Mitigasi" },
  { href: "/darurat", label: "Info Darurat" },
  { href: "/berita", label: "Berita" },
  { href: "/kuis", label: "Quiz" },
  { href: "/ai-assistant", label: "AI Assistant" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Shield className="w-7 h-7 text-black" />
          <span>SIGAP</span>
          <span className="hidden sm:inline text-dark text-white font-normal text-sm">
            | Sistem Info Kebencanaan
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg bg-gray-800 text-white"
                    : "hover:bg-gray-800 text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Darurat Desktop */}
        <Link
          href="/darurat"
          className="hidden md:flex items-center gap-1 bg-gray-800 text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-blue-500 transition-colors"
        >
          Darurat
        </Link>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? "bg-green-900 text-white"
                      : "hover:bg-black"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/darurat"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 bg-green-900 text-white font-bold text-sm px-4 py-2 rounded-full text-center"
              >
                Info Darurat
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}




