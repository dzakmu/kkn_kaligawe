'use client';

import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "Apa saja fasilitas yang tersedia di Rusunawa Kaligawe?",
    answer: "Fasilitas meliputi kamar mandi dalam, dapur bersama, area parkir, keamanan 24 jam, dan akses air bersih, aula serbaguna, mushola, halaman bermain bersama, serta layanan kebersihan.",
  },
  {
    question: "Bagaimana cara mendaftar untuk tinggal di Rusun?",
    answer: "Anda dapat datang langsung ke kantor pengelola Rusunawa Kaligawe atau menghubungi nomor (024) - 860 422 51 atau juga dapat menghubungi email therusunawa@gmail.com.",
  },
  {
    question: "Apakah tersedia hunian untuk keluarga?",
    answer: "Ya, tersedia unit untuk keluarga kecil dan individu. Ketersediaan unit dapat ditanyakan langsung ke pihak pengelola.",
  },
  {
    question: "Berapa biaya sewa bulanan di Rusunawa?",
    answer: "Biaya sewa bervariasi tergantung pada tipe unit dan berada di lantai berapa unit tersebut, mulai dari Rp65.000 hingga Rp110.000 per bulan.",
  },
  {
    question: "Bagaimana jika terjadi kerusakan pada fasilitas?",
    answer: "Penghuni bisa melapor ke pengelola UPTD Rumah Susun Sewa Kota Semarang atau dapat menghubungi ke nomor (024) - 860 422 51 dan teknisi akan dikirim untuk perbaikan tanpa biaya tambahan.",
  },
  {
    question: "Apa saja kegiatan yang ada di Rusunawa?",
    answer: "Kegiatan yang ada di Rusunawa antara lain, kegiatan PKK, posyandu, Pemberantasan Jentik Nyamuk(PJN), Senam Bersama, Kerja Bakti, Perayaan 17 Agustus, dsb.",
  },
  {
    question: "Bagaimana cara menghubungi pengelola Rusunawa?",
    answer: "Anda dapat menghubungi pengelola melalui telepon di (024) - 860 422 51 atau email di therusunawa@gmail.com.",
  },
  {
    question: "Apakah Rusunawa menerima penghuni dari luar Kota Semarang?",
    answer: "Ya, selama memenuhi syarat administrasi dan terdapat unit yang tersedia, penghuni dari luar kota diperbolehkan.",
  },
  {
    question: "Apakah tersedia WiFi atau layanan internet di Rusunawa?",
    answer: "Saat ini belum tersedia layanan WiFi terpusat. Namun penghuni dapat menggunakan layanan internet pribadi dengan penyedia pilihan masing-masing.",
  },
  {
    question: "Apakah tersedia lahan parkir untuk kendaraan pribadi?",
    answer: "Ya, tersedia area parkir untuk sepeda motor dan mobil, namun jumlahnya terbatas dan berdasarkan ketersediaan.",
  },  
];

export default function RusunFAQCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faqs.length);
      setFlippedIndex(null);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const delayRestartAutoplay = () => {
    stopInterval();
    if (userInteractedTimeoutRef.current) {
      clearTimeout(userInteractedTimeoutRef.current);
    }
    userInteractedTimeoutRef.current = setTimeout(() => {
      startInterval();
    }, 7000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? faqs.length - 1 : prev - 1));
    setFlippedIndex(null);
    delayRestartAutoplay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === faqs.length - 1 ? 0 : prev + 1));
    setFlippedIndex(null);
    delayRestartAutoplay();
  };

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
    setFlippedIndex(null);
    delayRestartAutoplay();
  };

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
    delayRestartAutoplay();
  };

  useEffect(() => {
    startInterval();
    return () => {
      stopInterval();
      if (userInteractedTimeoutRef.current) {
        clearTimeout(userInteractedTimeoutRef.current);
      }
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 pt-8 pb-16 text-center">
      <div className="relative h-[320px] md:h-[360px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
        key={currentIndex}
        onClick={() => toggleFlip(currentIndex)}
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, x: -50 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full max-w-xl h-full cursor-pointer perspective"
          >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 p-0
        ${flippedIndex === currentIndex ? 'rotate-y-180' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Blue left border */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#0D5EA6] rounded-l-3xl z-10" />

          {/* Front */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-10 py-10 bg-white/80 text-left backface-hidden rounded-3xl border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="text-[#0D5EA6]" size={22} />
          <span className="text-sm text-[#0D5EA6] font-semibold">FAQ #{currentIndex + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{faqs[currentIndex].question}</h3>
            <span className="text-xs text-gray-400">Klik untuk lihat jawaban</span>
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800 text-base text-center px-8 py-10 rounded-3xl rotate-y-180 backface-hidden border border-blue-100 shadow-lg">
            <div className="mb-4">
          <HelpCircle className="text-blue-500 mx-auto" size={28} />
            </div>
            <div className="font-semibold text-lg mb-2">Jawaban</div>
            <div>{faqs[currentIndex].answer}</div>
            <span className="mt-6 text-xs text-gray-400">Klik untuk kembali</span>
          </div>
        </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <ChevronLeft className="text-blue-700" />
        </button>

        <div className="flex space-x-2">
          {faqs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-3 w-3 rounded-full ${idx === currentIndex ? 'bg-[#0D5EA6]' : 'bg-gray-200'
                } transition-all duration-300`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <ChevronRight className="text-blue-700" />
        </button>
      </div>
    </section>
  );
}
