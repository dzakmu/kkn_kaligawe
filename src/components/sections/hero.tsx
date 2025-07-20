'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TypingTextLoop from "../ui/typingTesxtLoop";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotatingParagraphs = [
    "Pusat Informasi dan Kegiatan Rumah Susun Kaligawe, Semarang.",
    "Temukan informasi terkini tentang kegiatan, dan UMKM yang tersedia di Rusunawa Kaligawe."
  ];

  const images = [
    "/images/rusun.png",
    "/images/rusun2.png",
    "/images/rusun3.png",
    "/images/kkn.jpg",
    "/images/senam.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-br from-[#e0e9f6] via-[#f8f9ff] to-[#fff] py-20 md:py-28 lg:py-36 overflow-hidden min-h-[85vh]">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-50/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-blob-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-blob-2"></div>
        <div className="absolute top-1/2 right-[-50px] w-48 h-48 bg-teal-200 rounded-full opacity-5 animate-blob-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-gray-900 leading-tight">
            Rumah Susun<br /> Kaligawe
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            <TypingTextLoop texts={rotatingParagraphs} cursor={true} />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#about" className="inline-flex items-center justify-center bg-[#0D5EA6] text-white px-8 py-3 rounded-md shadow-lg hover:bg-[#0A4A87] transition-all duration-300 text-lg font-medium animate-bounce-slow">
              Mulai &rarr;
            </Link>
          </div>
        </div>

        {/* Image Cards - Shuffle Effect */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] lg:h-[550px]">
          {images.map((src, index) => {
            const position = (index - activeIndex + images.length) % images.length;

            const zIndex = 10 - position;
            const translate = position * 10;
            const rotate = position * 3;

            return (
              <div
                key={src}
                className={`absolute inset-0 rounded-3xl overflow-hidden transition-all duration-700 ease-in-out`}
                style={{
                  zIndex,
                  transform: `translate(${translate}px, ${translate}px) scale(${1 - position * 0.05}) rotate(${rotate}deg)`
                }}
              >
                <Image
                  src={src}
                  alt={`Gambar Rusun ${index + 1}`}
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
