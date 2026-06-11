import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  { nama: "Muhammad Aldi Sheva", peran: "Project Lead & Frontend Developer", inisial: "MA" },
  { nama: "Fikr Muarif", peran: "Backend Developer", inisial: "FM" },
  { nama: "Gilang Amangga", peran: "UI/UX Designer", inisial: "GA" },
];

const teknologi = [
  { nama: "Next.js 14", kategori: "Framework", icon: "⚡" },
  { nama: "TypeScript", kategori: "Bahasa", icon: "🔷" },
  { nama: "Tailwind CSS", kategori: "Styling", icon: "🎨" },
  { nama: "PostgreSQL", kategori: "Database", icon: "🗄️" },
  { nama: "Prisma ORM", kategori: "ORM", icon: "🔗" },
  { nama: "Vercel", kategori: "Deployment", icon: "🚀" },
];
const tujuan = [
  {
    judul: "Edukasi Kebencanaan",
    deskripsi:
      "Memberikan informasi dan edukasi bencana alam kepada masyarakat Indonesia secara mudah dan terpercaya.",
  },
  {
    judul: "Panduan Mitigasi",
  deskripsi:
      "Meenyediakan panduan langkah-langkah mitigasi sebelum, saat, dan sesudah bencana terjadi.",
  },
  {
    judul: "Respons Cepat",
    deskripsi:
      "Membantu masyarakat mengakses informasi darurat dan kontak bantuan dengan cepat di saat kritis.",
  },
  {
    judul: "Peta Risiko",
    deskripsi:
      "Menyajikan peta risiko bencana berbasis wilayah agar masyarakat waspada terhadap potensi ancaman.",
  },
];

export default function TentangPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0f172a" }}>
      <Navbar />

      <main className="flex-1"></main>
      {/* Hero */}
        <section
          className="relative py-20 px-6 text-center overflow-hidden"
          style={{ backgroundColor: "#1e293b" }}
        >
          <div
            className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: "#4ade80" }}
          />
          <div
            className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full opacity-5"
            style={{ backgroundColor: "#4ade80" }}
          />
          <div className="relative max-w-3xl mx-auto">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "#166534", color: "#4ade80" }}

            ></div>
            
