import Image from "next/image";
import Link from "next/link";
import TypingTextLoop from "./ui/typingTesxtLoop";

export default function Hero() {
  const rotatingParagraphs = [
    "Pusat Informasi dan Kegiatan Rumah Susun Kaligawe, Semarang.",
    "Temukan informasi terkini tentang kegiatan, dan UMKM yang tersedia di Rusunawa Kaligawe."
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#e0e9f6] via-[#f8f9ff] to-[#fff] py-20 md:py-28 lg:py-36 overflow-hidden min-h-[85vh]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-50/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-blob-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-blob-2"></div>
        <div className="absolute top-1/2 right-[-50px] w-48 h-48 bg-teal-200 rounded-full opacity-5 animate-blob-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
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

        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] lg:h-[550px] animate-fade-in-right">
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 scale-105 opacity-80 transition-all duration-500 hover:rotate-0 hover:scale-100 hover:opacity-100">
            <Image
              src="/images/rusun.png"
              alt="Rusun Image Background Layer"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden z-10 transition-all duration-500 hover:rotate-[-3deg] hover:scale-105">
            <Image
              src="/images/rusun.png"
              alt="Rusun Image Foreground Layer"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute top-8 right-8 z-20 text-[#0D5EA6]/80 hidden sm:block">
              <svg width="60" height="40" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 25C0 25 10 35 20 25C30 15 40 35 50 25C60 15 70 35 80 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M0 35C0 35 10 45 20 35C30 25 40 45 50 35C60 25 70 45 80 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}