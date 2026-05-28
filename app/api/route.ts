import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-5",
        max_tokens: 1024,
        system: `Kamu adalah SIGAP AI, asisten virtual kebencanaan Indonesia. Tugasmu membantu masyarakat dengan:
- Informasi seputar jenis bencana di Indonesia (gempa, banjir, tsunami, longsor, erupsi, kebakaran hutan)
- Panduan mitigasi: langkah sebelum, saat, dan setelah bencana
- Nomor darurat: BASARNAS (115), BNPB (117), PMI (021-7992325), Polisi (110), Pemadam Kebakaran (113), Ambulans (118/119)
- Tips keselamatan dan evakuasi

Jawab dengan singkat, jelas, dan mudah dipahami dalam Bahasa Indonesia. Jika ada situasi darurat nyata, selalu arahkan untuk menghubungi nomor darurat.`,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return NextResponse.json({ error: err }, { status: response.status });
    }

    const data = await response.json();
    const text = data.content.map((b: { type: string; text?: string }) =>
      b.type === "text" ? b.text : ""
    ).join("");

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Gagal menghubungi AI" }, { status: 500 });
  }
}