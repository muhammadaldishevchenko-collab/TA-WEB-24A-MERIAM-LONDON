import Image from "next/image";
import Link from "next/link";
import { Shield, MapPin, Phone, Newspaper, GraduationCap, AlertCircle, Image as ImageIcon } from "lucide-react";

const features = [
  {
    title: "Edukasi Bencana",
    description: "Panduan praktis & langkah aman sebelum, saat, dan sesudah bencana.",
    icon: GraduationCap,
    href: "/edukasi",
    accent: "from-green-600 to-emerald-500",
  },
  {
    title: "Panduan Mitigasi",
    description: "Fokus mitigasi 3 fase agar risiko dan korban bisa diminimalkan.",
    icon: Shield,
    href: "/mitigasi",
    accent: "from-emerald-600 to-teal-500",
  },
  {
    title: "Info Darurat",
    description: "Nomor darurat & prosedur melapor yang jelas dan cepat.",
    icon: Phone,
    href: "/darurat",
    accent: "from-red-600 to-orange-500",
  },
  {
    title: "Peta Risiko",
    description: "Lihat level risiko wilayah dan jenis bencana yang perlu diwaspadai.",
    icon: MapPin,
    href: "/peta-risiko",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    title: "Berita Kebencanaan",
    description: "Ringkasan berita terkini untuk menambah wawasan dan kewaspadaan.",
    icon: Newspaper,
    href: "/berita",
    accent: "from-amber-600 to-orange-500",
  },
  {
    title: "Quiz & Evaluasi",
    description: "Uji pemahamanmu dengan quiz singkat dan edukatif.",
    icon: AlertCircle,
    href: "/kuis",
    accent: "from-violet-600 to-fuchsia-500",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <div className="relative overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-white dark:to-black">
        {/* Background blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute top-10 -right-24 h-80 w-80 rounded-full bg-amber-300 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 pt-10 pb-16 sm:pt-14 sm:pb-20">
          {/* Hero */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur">
                <Shield className="h-4 w-4" />
                Sistem Informasi & Edukasi Kebencanaan
              </div>

              {/* LOGO (gunakan logo.png dulu karena belum ada webp) */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  className="h-auto w-auto drop-shadow"
                  src="/logo.png"
                  alt="SIGAP Logo"
                  width={120}
                  height={40}
                  priority
                />
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Siap Hadapi Bencana.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Platform edukasi kebencanaan untuk mempersiapkan diri, keluarga, dan komunitas menghadapi bencana alam di Indonesia.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/peta-risiko"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-green-900 shadow-lg shadow-black/10 transition hover:bg-emerald-50"
                >
                  <ImageIcon className="h-4 w-4" />
                  Periksa Peta Risiko
                </Link>

                <Link
                  href="/berita"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Baca Berita
                </Link>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Panduan", "Info Darurat", "Peta Risiko"].map((t, idx) => (
                  <div key={t} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                    <div className="text-2xl">{idx === 0 ? "📚" : idx === 1 ? "📱" : "🗺️"}</div>

                    <div className="mt-1 text-sm font-semibold text-white/90">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
                <div className="absolute -left-10 -top-10 h-24 w-24 rounded-3xl bg-white/10 blur" />
                <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-3xl bg-emerald-400/20 blur" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Mulai dari yang paling penting</div>
                    <div className="mt-2 text-2xl font-extrabold text-white">
                      Selalu siap, selalu waspada.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  {[{
                    label: "Peta Risiko",
                    desc: "Cek wilayah dengan level risiko.",
                    href: "/peta-risiko",
                    icon: MapPin,
                  }, {
                    label: "Darurat",
                    desc: "Nomor & langkah melapor.",
                    href: "/darurat",
                    icon: Phone,
                  }, {
                    label: "Mitigasi",
                    desc: "Panduan 3 fase mitigasi.",
                    href: "/mitigasi",
                    icon: GraduationCap,
                  }].map((card) => {
                    const Icon = card.icon;
                    return (
                      <Link
                        key={card.label}
                        href={card.href}
                        className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-white/10 p-2">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{card.label}</div>
                            <div className="text-xs text-white/70">{card.desc}</div>
                          </div>
                        </div>
                        <div className="text-white/80 group-hover:text-white">→</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Menu Utama</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
            Semua fitur dirancang agar informasi kebencanaan mudah dipahami dan cepat diakses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`rounded-2xl bg-gradient-to-r ${f.accent} p-4 text-white shadow-sm`}> 
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-extrabold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.description}</p>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700">
                  Buka menu <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-bold text-green-900">Catatan Data</div>
              <div className="mt-1 text-sm text-gray-700">
                Konten bersifat edukatif. Untuk informasi real-time, kunjungi{' '}
                <a
                  href="https://bnpb.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-green-900 underline"
                >
                  bnpb.go.id
                </a>
                .
              </div>
            </div>
            <Link
              href="/darurat"
              className="inline-flex h-11 items-center justify-center rounded-full bg-green-900 px-5 text-sm font-extrabold text-white shadow-lg shadow-black/10 transition hover:bg-green-800"
            >
              Siap Darurat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

