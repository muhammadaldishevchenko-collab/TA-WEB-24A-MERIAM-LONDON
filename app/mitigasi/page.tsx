import React from 'react'
import { mitigasiData } from "@/lib/data";
import { Map } from "lucide-react";


export const metadata = { title: "Panduan Mitigasi | SIGAP" };

export default function MitigasiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-2">
        <Map className="w-8 h-8 text-green-600" />
        <h1 className="text-3xl font-bold text-gray-800">Panduan Mitigasi Bencana</h1>
      </div>
      <p className="text-gray-500 mb-10">
        Langkah-langkah konkret yang harus dilakukan sebelum, saat, dan
        setelah bencana terjadi untuk meminimalkan risiko dan korban.
      </p>

      <div className="flex flex-col gap-10">
        {mitigasiData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 flex items-center gap-4">
              <span className="text-5xl">{item.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{item.bencana}</h2>
                <p className="text-green-100 text-sm mt-1">
                  Panduan 3 fase penanganan bencana
                </p>
              </div>
            </div>

            {/* 3 Kolom Fase */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { label: "Sebelum Bencana", steps: item.sebelum, textColor: "text-blue-700", bgColor: "bg-blue-50", emoji: "📋" },
                { label: "Saat Terjadi", steps: item.saatTerjadi, textColor: "text-red-700", bgColor: "bg-red-50", emoji: "⚠️" },
                { label: "Setelah Bencana", steps: item.setelah, textColor: "text-green-700", bgColor: "bg-green-50", emoji: "✅" },
              ].map((fase) => (
                <div key={fase.label} className="p-6">
                  <div className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full mb-4 ${fase.bgColor} ${fase.textColor}`}>
                    {fase.emoji} {fase.label}
                  </div>
                  <ul className="flex flex-col gap-3">
                    {fase.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className={`font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${fase.bgColor} ${fase.textColor}`}>
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}