import React from 'react'
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
    </div>
  );
}
  
