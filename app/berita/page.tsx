import React from 'react'
import { beritaData } from "@/lib/data";
import { Newspaper } from "lucide-react";

export const metadata = { title: "Berita | SIGAP" };

const categoryColors: Record<string, string> = {
  Gempa: "bg-red-100 text-red-700",
  Tsunami: "bg-blue-100 text-blue-700",
  Banjir: "bg-sky-100 text-sky-700",
  Erupsi: "bg-orange-100 text-orange-700",
  Edukasi: "bg-green-100 text-green-700",
  Teknologi: "bg-purple-100 text-purple-700",
};

export default function berita() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-2">
        <Newspaper className="w-8 h-8 text-orange-500" />
        <h1 className="text-3xl font-bold text-gray-800">Berita Kebencanaan</h1>
      </div>
      <p className="text-gray-500 mb-10">
        Informasi terkini seputar kejadian bencana, peringatan dini, dan kegiatan mitigasi di Indonesia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaData.map((berita) => (
          <article key={berita.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
            {/* Cover / Ikon */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 py-10 text-center text-6xl">
              {berita.image}
            </div>

            {/* Konten */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColors[berita.kategori] || "bg-gray-100 text-gray-600"}`}>
                  {berita.kategori}
                </span>
                <span className="text-xs text-gray-400">{berita.tanggal}</span>
              </div>

              <h2 className="font-bold text-gray-800 mb-3 leading-snug">{berita.judul}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{berita.ringkasan}</p>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">{berita.penulis}</span>
                <button className="text-xs text-red-600 font-semibold hover:underline">
                  Baca selengkapnya →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
