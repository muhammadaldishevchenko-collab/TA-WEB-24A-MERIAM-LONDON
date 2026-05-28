import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {/* LOGO */}
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="SIGAP Logo"
          width={120}
          height={40}
          priority
        />

        {/* TEXT */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mt-8">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Siap Hadapi Bencana.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Platform edukasi kebencanaan untuk mempersiapkan diri, keluarga,
            dan komunitas menghadapi bencana alam di Indonesia.
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-gray-800 md:w-[158px]"
            href="#"
          >
            <Image
              src="/logo.png"
              alt="icon"
              width={16}
              height={16}
            />
            Periksa
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-black/20 px-5 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 md:w-[158px]"
            href="#"
          >
            Berita
          </a>

        </div>
      </main>
    </div>
  );
}