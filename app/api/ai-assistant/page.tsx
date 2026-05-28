"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, AlertTriangle, RefreshCw } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "Apa yang harus dilakukan saat gempa?",
  "Nomor darurat bencana apa saja?",
  "Bagaimana cara evakuasi saat tsunami?",
  "Tips persiapan tas darurat bencana",
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya **SIGAP AI**, asisten virtual kebencanaan Indonesia. 👋\n\nSaya siap membantu Anda dengan informasi seputar bencana alam, panduan mitigasi, dan nomor-nomor darurat.\n\nAda yang bisa saya bantu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text?: string) {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply || "Maaf, terjadi kesalahan." },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ Gagal terhubung ke server. Periksa koneksi Anda." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function resetChat() {
    setMessages([
      {
        role: "assistant",
        content: "Halo! Saya **SIGAP AI**, asisten virtual kebencanaan Indonesia. 👋\n\nAda yang bisa saya bantu?",
      },
    ]);
  }

  // Render markdown bold (**text**) dan newline
  function renderText(text: string) {
    return text
      .split("\n")
      .map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i}>
            {parts.map((p, j) =>
              p.startsWith("**") && p.endsWith("**") ? (
                <strong key={j}>{p.slice(2, -2)}</strong>
              ) : (
                p
              )
            )}
            {i < text.split("\n").length - 1 && <br />}
          </span>
        );
      });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 text-white p-2.5 rounded-xl">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">SIGAP AI</h1>
            <p className="text-sm text-gray-500">Asisten Virtual Kebencanaan</p>
          </div>
        </div>
        <button
          onClick={resetChat}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
        >
          <RefreshCw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Warning banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-yellow-700">
          Dalam keadaan darurat nyata, segera hubungi <strong>BASARNAS 115</strong> atau <strong>BNPB 117</strong>. AI ini hanya untuk edukasi.
        </p>
      </div>

      {/* Chat area */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-4">
        <div className="h-96 overflow-y-auto p-4 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === "assistant"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Bot className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>

              {/* Bubble */}
              <div
                className={`max-w-xs sm:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-gray-100 text-gray-800 rounded-tl-sm"
                    : "bg-red-600 text-white rounded-tr-sm"
                }`}
              >
                {renderText(msg.content)}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {loading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Tanyakan seputar kebencanaan..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400"
            disabled={loading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="bg-red-600 text-white p-2.5 rounded-xl hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick questions */}
      <div>
        <p className="text-xs text-gray-400 mb-2 font-medium">Pertanyaan cepat:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={loading}
              className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-40"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}