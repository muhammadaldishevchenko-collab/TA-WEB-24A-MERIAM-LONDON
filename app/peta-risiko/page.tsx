import { useState } from "react";
import { MapPin, AlertTriangle, Info } from "lucide-react";

const wilayahData = [
  {
    id: 1, nama: "Aceh", risiko: ["Gempa", "Tsunami"], level: "sangat-tinggi",
    detail: "Terletak di pertemuan 3 lempeng tektonik. Pernah dilanda tsunami dahsyat 2004.",
    koordinat: { x: 8, y: 20 },
  },
  {
    id: 2, nama: "Sumatera Barat", risiko: ["Gempa", "Longsor", "Tsunami"], level: "sangat-tinggi",
    detail: "Jalur Sesar Semangko melintas di sini. Gempa besar sering terjadi.",
    koordinat: { x: 12, y: 38 },
  },
  {
    id: 3, nama: "Jakarta & Jawa Barat", risiko: ["Banjir", "Gempa"], level: "tinggi",
    detail: "Banjir tahunan akibat urbanisasi masif dan pendangkalan sungai.",
    koordinat: { x: 32, y: 55 },
  },
  {
    id: 4, nama: "Jawa Tengah & DIY", risiko: ["Gempa", "Erupsi", "Longsor"], level: "tinggi",
    detail: "Gunung Merapi aktif. Gempa Yogyakarta 2006 menelan ribuan korban.",
    koordinat: { x: 40, y: 55 },
  },
  {
    id: 5, nama: "Jawa Timur", risiko: ["Gempa", "Erupsi", "Banjir"], level: "tinggi",
    detail: "Gunung Semeru dan Bromo aktif. Pesisir selatan rawan tsunami.",
    koordinat: { x: 50, y: 53 },
  },
  {
    id: 6, nama: "Sulawesi Tengah", risiko: ["Gempa", "Tsunami", "Likuifaksi"], level: "sangat-tinggi",
    detail: "Gempa Palu 2018 memicu tsunami dan likuifaksi yang menghancurkan pemukiman.",
    koordinat: { x: 68, y: 38 },
  },
  {
    id: 7, nama: "Maluku", risiko: ["Gempa", "Tsunami", "Erupsi"], level: "sangat-tinggi",
    detail: "Zona subduksi aktif. Gunung Ibu dan Dukono sering erupsi.",
    koordinat: { x: 82, y: 38 },
  },
  {
    id: 8, nama: "Papua", risiko: ["Gempa", "Banjir", "Longsor"], level: "tinggi",
    detail: "Sesar aktif di pegunungan tengah. Banjir bandang sering di lembah-lembah.",
    koordinat: { x: 90, y: 48 },
  },
  {
    id: 9, nama: "Kalimantan", risiko: ["Kebakaran Hutan", "Banjir"], level: "sedang",
    detail: "Kebakaran gambut saat musim kering sangat merusak. Banjir di pesisir.",
    koordinat: { x: 58, y: 38 },
  },
  {
    id: 10, nama: "Bali & NTB", risiko: ["Gempa", "Erupsi", "Tsunami"], level: "tinggi",
    detail: "Gunung Rinjani aktif. Gempa Lombok 2018. Pesisir selatan rawan tsunami.",
    koordinat: { x: 58, y: 60 },
  },
];

const levelConfig = {
  "sangat-tinggi": { label: "Sangat Tinggi", color: "bg-red-100 text-red-800 border-red-300", dot: "bg-red-500", badge: "bg-red-500" },
  "tinggi": { label: "Tinggi", color: "bg-orange-100 text-orange-800 border-orange-300", dot: "bg-orange-400", badge: "bg-orange-400" },
  "sedang": { label: "Sedang", color: "bg-yellow-100 text-yellow-800 border-yellow-300", dot: "bg-yellow-400", badge: "bg-yellow-400" },
};

const bencanaEmoji: Record<string, string> = {
  Gempa: "🌍", Tsunami: "🌊", Longsor: "⛰️", Banjir: "💧",
  Erupsi: "🌋", "Kebakaran Hutan": "🔥", Likuifaksi: "🏚️",
};

export default function PetaRisikoPage() {
  const [selected, setSelected] = useState<typeof wilayahData[0] | null>(null);
  const [filterLevel, setFilterLevel] = useState<string>("semua");

  const filtered = filterLevel === "semua"
    ? wilayahData
    : wilayahData.filter((w) => w.level === filterLevel);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <MapPin className="w-8 h-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-800">Peta Risiko Bencana Indonesia</h1>
      </div>
      <p className="text-gray-500 mb-8">
        Sebaran wilayah rawan bencana di seluruh Indonesia berdasarkan data BNPB.
      </p>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["semua", "sangat-tinggi", "tinggi", "sedang"].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setFilterLevel(lvl)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filterLevel === lvl
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-red-300"
            }`}
          >
            {lvl === "semua" ? "Semua Wilayah" : lvl === "sangat-tinggi" ? "🔴 Sangat Tinggi" : lvl === "tinggi" ? "🟠 Tinggi" : "🟡 Sedang"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Peta Visual (Simplified Indonesia Map) */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 relative" style={{ minHeight: "380px" }}>
            {/* Background Indonesia outline */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-9xl">🗺️</span>
            </div>
            <p className="text-xs text-blue-400 font-medium mb-2 px-2">
              Indonesia — Klik titik untuk detail wilayah
            </p>
            {/* Plot wilayah sebagai titik interaktif */}
            <div className="relative w-full" style={{ height: "340px" }}>
              {filtered.map((w) => {
                const cfg = levelConfig[w.level as keyof typeof levelConfig];
                const isSelected = selected?.id === w.id;
                return (
                  <button
                    key={w.id}
                    onClick={() => setSelected(w)}
                    style={{ left: `${w.koordinat.x}%`, top: `${w.koordinat.y}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-transform hover:scale-125 ${isSelected ? "scale-125 z-10" : ""}`}
                    title={w.nama}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${cfg.badge} ${isSelected ? "ring-2 ring-gray-800 ring-offset-1" : ""}`} />
                    <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-1.5 py-0.5 rounded`}>
                      {w.nama}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="absolute bottom-3 right-3 bg-white/90 rounded-xl p-3 text-xs flex flex-col gap-1.5">
              {Object.entries(levelConfig).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${v.dot}`} />
                  <span className="text-gray-600">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>