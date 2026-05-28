// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env dari root proyek — penting untuk Windows
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// Verifikasi DATABASE_URL tersedia
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error("❌ DATABASE_URL tidak ditemukan di .env");
  console.error("   Pastikan file .env ada di root proyek dengan isi:");
  console.error('   DATABASE_URL="mysql://root:@localhost:3306/bencana_db"');
  process.exit(1);
}

// Inisialisasi Prisma Client
const prisma = new PrismaClient({
  log: ["error"],
  errorFormat: "pretty",
});

async function main(): Promise<void> {
  console.log("");
  console.log("╔══════════════════════════════════════════╗");
  console.log("║   🌱 SIGAP — Database Seeder             ║");
  console.log("║   Prisma 6.19.3 | Windows x64            ║");
  console.log("║   Node.js v24 | MySQL                    ║");
  console.log("╚══════════════════════════════════════════╝");
  console.log("");

  // ════════════════════════════════════════════
  // STEP 1 — StatistikBencana
  // ════════════════════════════════════════════
  console.log("📊 [1/4] Menghapus & mengisi StatistikBencana...");
  await prisma.statistikBencana.deleteMany();

  const statistikData = [
    // 2025
    { tahun: 2025, jenisBencana: "Banjir",               jumlahKejadian: 312, jumlahKorban: 1420, jumlahDampak: 85000,  provinsi: "Jawa Tengah"      },
    { tahun: 2025, jenisBencana: "Gempa Bumi",            jumlahKejadian: 87,  jumlahKorban: 340,  jumlahDampak: 12000,  provinsi: "Sulawesi Tengah"  },
    { tahun: 2025, jenisBencana: "Tanah Longsor",         jumlahKejadian: 156, jumlahKorban: 210,  jumlahDampak: 9500,   provinsi: "Jawa Barat"       },
    { tahun: 2025, jenisBencana: "Erupsi Gunung Berapi",  jumlahKejadian: 12,  jumlahKorban: 75,   jumlahDampak: 31000,  provinsi: "Jawa Timur"       },
    { tahun: 2025, jenisBencana: "Tsunami",               jumlahKejadian: 3,   jumlahKorban: 58,   jumlahDampak: 7200,   provinsi: "Sulawesi Barat"   },
    { tahun: 2025, jenisBencana: "Kebakaran Hutan",       jumlahKejadian: 245, jumlahKorban: 18,   jumlahDampak: 62000,  provinsi: "Kalimantan Barat" },
    // 2024
    { tahun: 2024, jenisBencana: "Banjir",               jumlahKejadian: 289, jumlahKorban: 1190, jumlahDampak: 79000,  provinsi: "Jawa Tengah"      },
    { tahun: 2024, jenisBencana: "Gempa Bumi",            jumlahKejadian: 102, jumlahKorban: 512,  jumlahDampak: 18000,  provinsi: "Sulawesi Tengah"  },
    { tahun: 2024, jenisBencana: "Tanah Longsor",         jumlahKejadian: 134, jumlahKorban: 178,  jumlahDampak: 8100,   provinsi: "Jawa Barat"       },
    { tahun: 2024, jenisBencana: "Erupsi Gunung Berapi",  jumlahKejadian: 9,   jumlahKorban: 42,   jumlahDampak: 24000,  provinsi: "Jawa Timur"       },
    { tahun: 2024, jenisBencana: "Tsunami",               jumlahKejadian: 2,   jumlahKorban: 31,   jumlahDampak: 4800,   provinsi: "Sulawesi Barat"   },
    { tahun: 2024, jenisBencana: "Kebakaran Hutan",       jumlahKejadian: 198, jumlahKorban: 11,   jumlahDampak: 51000,  provinsi: "Kalimantan Barat" },
  ];

  await prisma.statistikBencana.createMany({ data: statistikData });
  console.log(`   ✅ ${statistikData.length} data statistik berhasil\n`);

  // ════════════════════════════════════════════
  // STEP 2 — Komentar
  // ════════════════════════════════════════════
  console.log("💬 [2/4] Menghapus & mengisi Komentar...");
  await prisma.komentar.deleteMany();

  const komentarData = [
    { topikId: "1", topikJenis: "berita",  nama: "Budi Santoso",  email: "budi@example.com",   isi: "Semoga korban segera mendapat bantuan. Mari kita doakan bersama.",                                         disetujui: true },
    { topikId: "1", topikJenis: "berita",  nama: "Siti Rahayu",   email: "siti@example.com",   isi: "Saya sudah berdonasi lewat PMI. Ajak teman-teman juga untuk ikut membantu!",                              disetujui: true },
    { topikId: "2", topikJenis: "berita",  nama: "Ahmad Fauzi",   email: "ahmad@example.com",  isi: "Simulasi seperti ini sangat penting agar warga tahu cara evakuasi yang benar.",                           disetujui: true },
    { topikId: "3", topikJenis: "berita",  nama: "Dewi Lestari",  email: "dewi@example.com",   isi: "Salut untuk BNPB yang bergerak cepat mendistribusikan logistik ke daerah terdampak.",                    disetujui: true },
    { topikId: "1", topikJenis: "diskusi", nama: "Reza Pratama",  email: "reza@example.com",   isi: "Edukasi kebencanaan harus dimulai dari sekolah dasar agar generasi muda lebih siap.",                    disetujui: true },
    { topikId: "1", topikJenis: "diskusi", nama: "Nina Kartika",  email: "nina@example.com",   isi: "Setuju! Di daerah saya belum ada sosialisasi sama sekali dari pemerintah daerah.",                       disetujui: true },
    { topikId: "2", topikJenis: "diskusi", nama: "Hendra Wijaya", email: "hendra@example.com", isi: "Tas darurat minimal: air mineral, makanan 3 hari, obat-obatan, senter, dan dokumen penting.",            disetujui: true },
    { topikId: "3", topikJenis: "diskusi", nama: "Maya Sari",     email: "maya@example.com",   isi: "Aplikasi BMKG sangat membantu untuk memantau kondisi cuaca dan gempa secara real-time.",                 disetujui: true },
  ];

  await prisma.komentar.createMany({ data: komentarData });
  console.log(`   ✅ ${komentarData.length} data komentar berhasil\n`);

  // ════════════════════════════════════════════
  // STEP 3 — CuacaPeringatan
  // ════════════════════════════════════════════
  console.log("🚨 [3/4] Menghapus & mengisi CuacaPeringatan...");
  await prisma.cuacaPeringatan.deleteMany();

  const now = Date.now();
  const peringatanData = [
    {
      provinsi: "Jawa Tengah",
      jenis: "Banjir",
      level: "Siaga",
      pesan: "Curah hujan sangat tinggi diprediksi terjadi 24-48 jam ke depan. Warga di bantaran sungai diminta waspada dan siapkan rencana evakuasi.",
      berlakuHingga: new Date(now + 48 * 60 * 60 * 1000),
      aktif: true,
    },
    {
      provinsi: "Sulawesi Tengah",
      jenis: "Gempa",
      level: "Waspada",
      pesan: "Terdapat peningkatan aktivitas seismik di zona patahan Palu-Koro. Masyarakat diminta mempersiapkan tas darurat dan mengetahui jalur evakuasi.",
      berlakuHingga: new Date(now + 72 * 60 * 60 * 1000),
      aktif: true,
    },
    {
      provinsi: "Kalimantan Barat",
      jenis: "Kebakaran Hutan",
      level: "Bahaya",
      pesan: "Indeks bahaya kebakaran hutan sangat tinggi akibat kekeringan berkepanjangan. Dilarang membakar lahan dalam kondisi apapun.",
      berlakuHingga: new Date(now + 96 * 60 * 60 * 1000),
      aktif: true,
    },
    {
      provinsi: "Jawa Timur",
      jenis: "Erupsi",
      level: "Siaga",
      pesan: "Gunung Semeru menunjukkan peningkatan aktivitas vulkanik signifikan. Radius 8 km dari kawah harus dikosongkan. Ikuti arahan resmi PVMBG.",
      berlakuHingga: new Date(now + 120 * 60 * 60 * 1000),
      aktif: true,
    },
    {
      provinsi: "Nusa Tenggara Barat",
      jenis: "Tsunami",
      level: "Waspada",
      pesan: "Potensi gelombang tinggi di perairan selatan NTB. Nelayan diminta tidak melaut. Warga pesisir harap waspada dan pantau info BMKG.",
      berlakuHingga: new Date(now + 36 * 60 * 60 * 1000),
      aktif: true,
    },
    {
      provinsi: "Sumatera Barat",
      jenis: "Tanah Longsor",
      level: "Waspada",
      pesan: "Hujan deras terus-menerus meningkatkan risiko tanah longsor di wilayah perbukitan. Warga di lereng bukit diminta mengevakuasi diri ke tempat aman.",
      berlakuHingga: new Date(now + 24 * 60 * 60 * 1000),
      aktif: true,
    },
  ];

  await prisma.cuacaPeringatan.createMany({ data: peringatanData });
  console.log(`   ✅ ${peringatanData.length} data peringatan berhasil\n`);

  // ════════════════════════════════════════════
  // STEP 4 — LaporanBencana
  // ════════════════════════════════════════════
  console.log("📋 [4/4] Menghapus & mengisi LaporanBencana...");
  await prisma.laporanBencana.deleteMany();

  const laporanData = [
    {
      namaPelapor: "Agus Setiawan",
      noTelepon: "081234567890",
      jenisKelamin: "Laki-laki",
      provinsi: "Jawa Tengah",
      kabupaten: "Kab. Semarang",
      kecamatan: "Kec. Ungaran",
      alamatLengkap: "Jl. Diponegoro No. 45, dekat pasar tradisional",
      jenisBencana: "Banjir",
      tingkatDarurat: "Tinggi",
      jumlahKorban: 12,
      deskripsi: "Air sungai meluap sejak pukul 03.00 WIB dan menggenangi rumah warga setinggi 80 cm. Beberapa warga lansia dan anak-anak membutuhkan bantuan evakuasi segera.",
      status: "Diproses",
    },
    {
      namaPelapor: "Sari Dewi",
      noTelepon: "085678901234",
      jenisKelamin: "Perempuan",
      provinsi: "Sulawesi Tengah",
      kabupaten: "Kota Palu",
      kecamatan: "Kec. Palu Barat",
      alamatLengkap: "Jl. Sudirman No. 12, RT 03/RW 05",
      jenisBencana: "Gempa Bumi",
      tingkatDarurat: "Kritis",
      jumlahKorban: 5,
      deskripsi: "Gempa berkekuatan 5.2 SR dirasakan cukup kuat. Terdapat retakan pada dinding bangunan dan 1 rumah warga mengalami kerusakan parah. Butuh bantuan darurat.",
      status: "Menunggu",
    },
    {
      namaPelapor: "Budi Hartono",
      noTelepon: "089012345678",
      jenisKelamin: "Laki-laki",
      provinsi: "Jawa Barat",
      kabupaten: "Kab. Cianjur",
      kecamatan: "Kec. Cugenang",
      alamatLengkap: "Kampung Ciherang, dekat jembatan gantung",
      jenisBencana: "Tanah Longsor",
      tingkatDarurat: "Tinggi",
      jumlahKorban: 3,
      deskripsi: "Longsor terjadi setelah hujan deras 4 jam berturut-turut. Material longsor menutup jalan desa sepanjang 50 meter dan menghancurkan 2 rumah warga.",
      status: "Ditangani",
    },
  ];

  await prisma.laporanBencana.createMany({ data: laporanData });
  console.log(`   ✅ ${laporanData.length} data laporan berhasil\n`);

  // ════════════════════════════════════════════
  // RINGKASAN
  // ════════════════════════════════════════════
  console.log("╔══════════════════════════════════════════╗");
  console.log("║   🎉 Seeding Selesai!                    ║");
  console.log(`║   • StatistikBencana : ${statistikData.length} data               ║`);
  console.log(`║   • Komentar         :  ${komentarData.length} data                ║`);
  console.log(`║   • CuacaPeringatan  :  ${peringatanData.length} data                ║`);
  console.log(`║   • LaporanBencana   :  ${laporanData.length} data                ║`);
  console.log("╚══════════════════════════════════════════╝");
}

main()
  .catch((error: Error) => {
    console.error("\n❌ Seeding gagal!");
    console.error("   Error:", error.message);
    console.error("\n💡 Tips troubleshooting:");
    console.error("   1. Pastikan MySQL sudah berjalan (XAMPP → Start MySQL)");
    console.error("   2. Cek DATABASE_URL di file .env sudah benar");
    console.error("   3. Jalankan: npx prisma db push (sebelum seed)");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("\n🔌 Koneksi database ditutup.");
  });