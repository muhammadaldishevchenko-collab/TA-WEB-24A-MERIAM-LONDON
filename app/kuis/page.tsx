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
