import React from 'react'
import { educationData } from "@/lib/data";
import { BookOpen } from "lucide-react";

export const metadata = { title: "Edukasi Bencana | SIGAP" };


export default function edukasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="w-8 h-8 text-blue-600" />

        <h1 className="text-3xl font-bold text-gray-800">
          Edukasi Bencana
        </h1>
      </div>

      <p className="text-gray-500 mb-10">
        Pelajari jenis-jenis bencana yang sering terjadi di Indonesia,
        kenali tandanya, dan ketahui cara menghadapinya.
      </p>
      {/* Grid Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Ikon */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-10 text-center">
              <span className="text-6xl">{item.icon}</span>
            </div>

            {/* Konten */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    item.level === "Sangat Tinggi"
                      ? "bg-red-100 text-red-700"
                      : item.level === "Tinggi"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.level}
                </span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tips */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-blue-700 mb-2">
                  💡 Tips Keselamatan:
                </h3>
                <ul className="text-sm text-blue-800 flex flex-col gap-1">
                  {item.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}