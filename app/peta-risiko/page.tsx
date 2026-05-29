import { useState } from "react";
import { MapPin, AlertTriangle, Info } from "lucide-react";

const wilayahData = [
  {
    id: 1, nama: "Aceh", risiko: ["Gempa", "Tsunami"], level: "sangat-tinggi",
    detail: "Terletak di pertemuan 3 lempeng tektonik. Pernah dilanda tsunami dahsyat 2004.",
    koordinat: { x: 8, y: 20 },
  },
  {
    id: 2, nama: "Sumatera Barat", risiko: ["Gempa", "Longsor", "Tsunami"], level: "sangat-tinggi",
    detail: "Jalur Sesar Semangko melintas di sini. Gempa besar sering terjadi.",
    koordinat: { x: 12, y: 38 },
  },
  {
    id: 3, nama: "Jakarta & Jawa Barat", risiko: ["Banjir", "Gempa"], level: "tinggi",
    detail: "Banjir tahunan akibat urbanisasi masif dan pendangkalan sungai.",
    koordinat: { x: 32, y: 55 },
  },
  {
    id: 4, nama: "Jawa Tengah & DIY", risiko: ["Gempa", "Erupsi", "Longsor"], level: "tinggi",
    detail: "Gunung Merapi aktif. Gempa Yogyakarta 2006 menelan ribuan korban.",
    koordinat: { x: 40, y: 55 },
  },
  {
    id: 5, nama: "Jawa Timur", risiko: ["Gempa", "Erupsi", "Banjir"], level: "tinggi",
    detail: "Gunung Semeru dan Bromo aktif. Pesisir selatan rawan tsunami.",
    koordinat: { x: 50, y: 53 },
  },
  {
    id: 6, nama: "Sulawesi Tengah", risiko: ["Gempa", "Tsunami", "Likuifaksi"], level: "sangat-tinggi",
    detail: "Gempa Palu 2018 memicu tsunami dan likuifaksi yang menghancurkan pemukiman.",
    koordinat: { x: 68, y: 38 },
  },
  {
    id: 7, nama: "Maluku", risiko: ["Gempa", "Tsunami", "Erupsi"], level: "sangat-tinggi",
    detail: "Zona subduksi aktif. Gunung Ibu dan Dukono sering erupsi.",
    koordinat: { x: 82, y: 38 },
  },
  {
    id: 8, nama: "Papua", risiko: ["Gempa", "Banjir", "Longsor"], level: "tinggi",
    detail: "Sesar aktif di pegunungan tengah. Banjir bandang sering di lembah-lembah.",
    koordinat: { x: 90, y: 48 },
  },
  {
    id: 9, nama: "Kalimantan", risiko: ["Kebakaran Hutan", "Banjir"], level: "sedang",
    detail: "Kebakaran gambut saat musim kering sangat merusak. Banjir di pesisir.",
    koordinat: { x: 58, y: 38 },
  },
  {
    id: 10, nama: "Bali & NTB", risiko: ["Gempa", "Erupsi", "Tsunami"], level: "tinggi",
    detail: "Gunung Rinjani aktif. Gempa Lombok 2018. Pesisir selatan rawan tsunami.",
    koordinat: { x: 58, y: 60 },
  },
];
