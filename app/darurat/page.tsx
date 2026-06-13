import { emergencyContacts } from "@/lib/data-combat";
import { AlertTriangle, Phone } from "lucide-react";

export const metadata = { title: "Info Darurat | SIGAP" };

export default function DaruratPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Banner */}
      <div className="bg-red-600 text-white rounded-2xl p-8 mb-10 text-center">
        <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
        <h1 className="text-3xl font-extrabold mb-2"> Nomor Darurat</h1>
        <p className="text-red-200 text-base max-w-xl mx-auto">
          Simpan nomor-nomor penting ini di ponsel Anda. Dalam keadaan
          darurat, setiap detik sangat berharga.
        </p>
      </div>

      {/* Grid Kontak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {emergencyContacts.map((kontak) => (
          <div
            key={kontak.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <span className="text-5xl mb-3">{kontak.icon}</span>
            <h2 className="font-bold text-gray-800 mb-1 text-sm">{kontak.name}</h2>
            <span className="text-2xl font-extrabold text-red-600 mb-2">
              {kontak.number}
            </span>
            <p className="text-xs text-gray-400 leading-tight">{kontak.desc}</p>
          </div>
        ))}
      </div>

      {/* Prosedur Melapor */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Phone className="w-7 h-7 text-yellow-600" />
          <h2 className="text-xl font-bold text-yellow-800">
            Cara Melapor ke Nomor Darurat
          </h2>
        </div>
        <ol className="flex flex-col gap-4">
          {[
            "Tetap tenang dan hubungi nomor darurat yang sesuai dengan situasi.",
            "Sebutkan nama lengkap, lokasi kejadian (alamat atau patokan terdekat), dan jenis bencana.",
            "Jelaskan kondisi korban secara singkat: jumlah, kondisi kritis, atau yang butuh pertolongan segera.",
            "Ikuti instruksi dari petugas dan jangan menutup sambungan terlebih dahulu.",
            "Jika memungkinkan, kirimkan koordinat GPS atau foto lokasi kejadian.",
          ].map((teks, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="bg-yellow-400 text-yellow-900 font-extrabold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                {idx + 1}
              </span>
              <p className="text-gray-700 text-sm pt-1 leading-relaxed">{teks}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Tips Tambahan */}
      <div className="bg-gray-800 text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">📱 Tips Komunikasi Darurat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "🔋", tip: "Pastikan baterai ponsel selalu terisi minimal 70% di daerah rawan bencana." },
            { icon: "📡", tip: "Simpan nomor darurat offline — jangan hanya di internet." },
            { icon: "👨‍👩‍👧", tip: "Tentukan satu anggota keluarga sebagai kontak pusat saat bencana." },
            { icon: "📻", tip: "Siapkan radio baterai untuk menerima informasi saat listrik padam." },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-gray-700 rounded-xl p-4">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm text-gray-300 leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

