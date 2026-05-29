"use client";

import { useState } from "react";
import { quizData } from "@/lib/data";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

export default function KuisPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState<boolean[]>([]);

  const q = quizData[current];
  const total = quizData.length;

  function pilih(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const benar = idx === q.jawabanBenar;
    if (benar) setScore((s) => s + 1);
    setHistory((h) => [...h, benar]);
  }

  function lanjut() {
    if (current + 1 >= total) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  function reset() {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
    setHistory([]);
  }

  const nilaiPersen = Math.round((score / total) * 100);

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Kuis Selesai!</h1>
        <p className="text-gray-500 mb-8">Berikut hasil kesiapsiagaan bencana kamu:</p>

        <div className={`text-6xl font-extrabold mb-2 ${nilaiPersen >= 70 ? "text-green-600" : nilaiPersen >= 50 ? "text-yellow-500" : "text-red-500"}`}>
          {nilaiPersen}%
        </div>
        <p className="text-gray-500 mb-6">{score} dari {total} soal dijawab benar</p>

        {/* Progress bar */}
        <div className="bg-gray-100 rounded-full h-4 mb-6 mx-auto max-w-xs overflow-hidden">
          <div
            className={`h-4 rounded-full transition-all ${nilaiPersen >= 70 ? "bg-green-500" : nilaiPersen >= 50 ? "bg-yellow-400" : "bg-red-500"}`}
            style={{ width: `${nilaiPersen}%` }}
          />
        </div>

        <p className="text-gray-600 mb-8 text-lg font-medium">
          {nilaiPersen >= 70
            ? "Hebat! Kamu siap menghadapi bencana!"
            : nilaiPersen >= 50
            ? "Cukup baik, tapi masih perlu belajar lebih lanjut."
            : "Perlu banyak belajar tentang kesiapsiagaan bencana."}
        </p>

 {/* Riwayat per soal */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {history.map((h, i) => (
            <span
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${h ? "bg-green-500" : "bg-red-400"}`}
            >
              {i + 1}
            </span>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Ulangi Kuis
          </button>
          
            href="/edukasi"
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-red-300 transition-colors"
          >
            Baca Materi
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kuis Kesiapsiagaan</h1>
          <p className="text-gray-400 text-sm">Uji pengetahuanmu tentang bencana</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-red-600">{current + 1}</span>
          <span className="text-sm text-gray-400"> / {total}</span>
        </div>
      </div>
