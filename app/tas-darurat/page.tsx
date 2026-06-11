// src/app/tas-darurat/page.tsx
"use client";

import { useState } from "react";
import { tasItems } from "@/lib/data";
import { Package, CheckCircle2, Circle, Download } from "lucide-react";

export default function TasDaruratPage() {
  const allIds = tasItems.flatMap((k) => k.items.map((i) => i.id));
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (checked.size === allIds.length) {
      setChecked(new Set());
    } else {
      setChecked(new Set(allIds));
    }
  }

  const totalItems = allIds.length;
  const doneItems = checked.size;
  const persen = Math.round((doneItems / totalItems) * 100);

  const pentingItems = tasItems.flatMap((k) => k.items.filter((i) => i.penting)).map((i) => i.id);
  const pentingDone = pentingItems.filter((id) => checked.has(id)).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Package className="w-8 h-8 text-orange-500" />
        <h1 className="text-3xl font-bold text-gray-800">Checklist Tas Darurat</h1>
      </div>
      <p className="text-gray-500 mb-8">
        Siapkan tas darurat sebelum bencana datang. Centang item yang sudah kamu siapkan!
      </p>

      {/* Progress Stats */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-extrabold text-orange-500">{persen}%</span>
            <span className="text-gray-400 text-sm ml-2">siap</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{doneItems} / {totalItems} item</p>
            <p className="text-xs text-green-600 font-medium">
              Wajib: {pentingDone}/{pentingItems.length}
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${persen === 100 ? "bg-green-500" : persen >= 60 ? "bg-orange-400" : "bg-red-400"}`}
            style={{ width: `${persen}%` }}
          />
        </div>

        {persen === 100 && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-700 font-medium text-center">
            🎉 Tas darurat kamu sudah lengkap! Kamu siap menghadapi bencana.
          </div>
        )}
      </div>

      {/* Kontrol */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={toggleAll}
          className="flex items-center gap-2 text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-full hover:border-orange-400 hover:text-orange-600 transition-colors"
        >
          {checked.size === allIds.length ? "Hapus Semua" : "Centang Semua"}
        </button>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 px-3 py-2 bg-red-50 rounded-full">
          <span className="w-2 h-2 bg-red-500 rounded-full" /> = Wajib ada
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 px-3 py-2 bg-gray-50 rounded-full">
          <span className="w-2 h-2 bg-gray-300 rounded-full" /> = Opsional
        </span>
      </div>

      {/* Kategori Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tasItems.map((kategori) => {
          const kategoriIds = kategori.items.map((i) => i.id);
          const doneKat = kategoriIds.filter((id) => checked.has(id)).length;

          return (
            <div key={kategori.kategori} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Header Kategori */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{kategori.emoji}</span>
                  <h3 className="font-bold text-gray-800">{kategori.kategori}</h3>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  doneKat === kategoriIds.length
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {doneKat}/{kategoriIds.length}
                </span>
              </div>

              {/* Item List */}
              <ul className="p-4 flex flex-col gap-2">
                {kategori.items.map((item) => {
                  const isDone = checked.has(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggle(item.id)}
                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl transition-colors ${
                          isDone
                            ? "bg-green-50 text-green-800"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={`text-sm flex-1 ${isDone ? "line-through opacity-60" : ""}`}>
                          {item.nama}
                        </span>
                        {item.penting && (
                          <span className="text-xs text-red-500 font-bold flex-shrink-0">Wajib</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Tips Bawah */}
      <div className="mt-10 bg-orange-50 border border-orange-100 rounded-2xl p-6">
        <h3 className="font-bold text-orange-800 mb-3">💡 Tips Menyiapkan Tas Darurat</h3>
        <ul className="text-sm text-orange-700 flex flex-col gap-2">
          <li>• Simpan tas di tempat yang mudah dijangkau — dekat pintu atau di bawah tempat tidur.</li>
          <li>• Periksa dan perbarui isi tas setiap 6 bulan sekali, terutama makanan dan obat-obatan.</li>
          <li>• Setiap anggota keluarga (termasuk anak) sebaiknya memiliki tas darurat masing-masing.</li>
          <li>• Sertakan catatan nomor kontak penting di dalam tas (tidak hanya di HP).</li>
          <li>• Buat tas darurat untuk hewan peliharaan jika ada.</li>
        </ul>
      </div>
    </div>
  );
}