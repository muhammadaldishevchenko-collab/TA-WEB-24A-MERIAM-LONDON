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