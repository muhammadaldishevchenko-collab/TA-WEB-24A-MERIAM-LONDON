export const beritaData = [
  {
    id: 1,
    kategori: "Gempa",
    tanggal: "2025-01-12",
    judul: "Peringatan dini gempa diperbarui",
    ringkasan:
      "BMKG memperbarui peringatan dini gempa. Masyarakat dihimbau tetap waspada dan mengikuti arahan otoritas setempat.",
    penulis: "Tim SIGAP",
    // Pages currently render this as emoji/icon string, not image.
    image: "🌍",
  },
  {
    id: 2,
    kategori: "Banjir",
    tanggal: "2025-01-20",
    judul: "Musim hujan meningkatkan risiko banjir",
    ringkasan:
      "Curah hujan meningkat berpotensi menimbulkan banjir di beberapa wilayah. Siapkan rencana evakuasi keluarga.",
    penulis: "Tim SIGAP",
    image: "💧",
  },
  {
    id: 3,
    kategori: "Tsunami",
    tanggal: "2025-02-03",
    judul: "Simulasi edukasi tsunami untuk komunitas",
    ringkasan:
      "SIGAP mengadakan edukasi kesiapsiagaan tsunami agar masyarakat mengetahui jalur evakuasi sejak dini.",
    penulis: "Tim SIGAP",
    image: "🌊",
  },
];

export const emergencyContacts = [
  { id: 1, icon: "🚑", name: "Ambulans", number: "118 / 119", desc: "Layanan pertolongan pertama dan transport korban." },
  { id: 2, icon: "🚒", name: "Pemadam", number: "113", desc: "Penanganan kebakaran dan keadaan darurat." },
  { id: 3, icon: "🚓", name: "Polisi", number: "110", desc: "Pelayanan keamanan dan bantuan darurat." },
  { id: 4, icon: "📞", name: "BNPB", number: "117", desc: "Koordinasi informasi dan bantuan kebencanaan." },
  { id: 5, icon: "🛰️", name: "BASARNAS", number: "115", desc: "Pencarian dan pertolongan korban bencana." },
  { id: 6, icon: "⚠️", name: "Bencana", number: "112", desc: "Layanan darurat untuk rujukan awal." },
];
