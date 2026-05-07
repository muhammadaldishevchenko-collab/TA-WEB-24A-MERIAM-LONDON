// components/Footer.tsx
import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-bold text-lg">SIGAP</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Sistem Informasi dan Edukasi Kebencanaan berbasis web untuk
            membantu masyarakat Indonesia dalam menghadapi bencana alam.
          </p>
        </div>

        {/* Kolom 2: Menu */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigasi</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { href: "/", label: "Beranda" },
              { href: "/edukasi", label: "Edukasi Bencana" },
              { href: "/mitigasi", label: "Panduan Mitigasi" },
              { href: "/darurat", label: "Info Darurat" },
              { href: "/berita", label: "Berita" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak Darurat */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kontak Darurat</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-400">
            <li>🚁 BASARNAS: <span className="text-yellow-400 font-bold">115</span></li>
            <li>🏛️ BNPB: <span className="text-yellow-400 font-bold">117</span></li>
            <li>🚑 Ambulans: <span className="text-yellow-400 font-bold">118 / 119</span></li>
            <li>🚒 Pemadam: <span className="text-yellow-400 font-bold">113</span></li>
            <li>👮 Polisi: <span className="text-yellow-400 font-bold">110</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © 2025 SIGAP — Sistem Informasi & Edukasi Kebencanaan. Dibuat untuk keselamatan bersama.
      </div>
    </footer>
  );
}