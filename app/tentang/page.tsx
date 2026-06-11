import Navbar from "@/components/Navbar";

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

      <main className="flex-1">
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
            >
            Tentang SIGAP
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5"></h1>
              Sistem Informasi &amp;{" "}
              <span style={{ color: "#4ade80" }}>Edukasi Kebencanaan</span>
            </h1>
<p className="text-slate-300 text-lg leading-relaxed">
              SIGAP hadir sebagai platform digital terpadu untuk membantu masyarakat
              Indonesia memahami, mempersiapkan diri, dan merespons bencana alam
              dengan lebih cepat dan tepat.
            </p>
          </div>
          </section>

        <div className="max-w-5xl mx-auto px-6 py-14 space-y-16">

          {/* Deskripsi */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Apa itu <span style={{ color: "#4ade80" }}>SIGAP?</span>
              </h2>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-14 space-y-16">

          {/* Deskripsi */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Apa itu <span style={{ color: "#4ade80" }}>SIGAP?</span>
              </h2>
              <div
              className="rounded-2xl p-6 space-y-2"
              style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
            >
              {[
                { label: "Kategori Bencana", value: "12+" },
                { label: "Panduan Mitigasi", value: "30+" },
                { label: "Kontak Darurat", value: "5 Lembaga" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid #334155" }}
                >
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                  <span className="font-bold text-lg" style={{ color: "#4ade80" }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

{/* Tujuan */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Tujuan <span style={{ color: "#4ade80" }}>SIGAP</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tujuan.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: "#166534", color: "#4ade80" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                        <h3 className="font-semibold text-white mb-1">{item.judul}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teknologi */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Teknologi yang <span style={{ color: "#4ade80" }}>Digunakan</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {teknologi.map((tech) => (
                <div
                  key={tech.nama}
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm">{tech.nama}</p>
                    <p className="text-xs text-slate-500">
                        {tech.kategori}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
                        
          {/* Tim */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Tim <span style={{ color: "#4ade80"    
              }}>Pengembang</span>
            </h2>      
            <div className="grid sm:grid-cols-2 gap-4">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex items-center gap-4"
                  style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: "#166534", color: "#4ade80" }}
                  >  
                     {member.inisial}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
