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
