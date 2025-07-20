'use client';

import React from 'react';
import Link from 'next/link'; 

export default function CTABanner() {
  return (
    <section id="support" className="relative py-16 lg:py-24 bg-gradient-to-br from-[#e0e9f6] via-[#f8f9ff] to-[#fff] overflow-hidden">
      <h2 className="absolute md:left-2/8 md:top-4 left-5/11 top-0.5 transform -translate-x-1/2
                     text-[80px] md:text-[120px] lg:text-[100px]
                     font-extrabold opacity-20
                     text-gradient-to-transparent
                     z-0 whitespace-nowrap select-none
                     ">
        SUPPORT
      </h2>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative z-10">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl text-left lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"> 
            Butuh Hunian? <br /> Rusun Aja
          </h2>
          <p className="text-gray-700 text-base md:text-lg text-left max-w-xl mx-auto lg:mx-0 leading-relaxed"> 
            Kami siap membantu Anda menemukan hunian yang nyaman dan terjangkau. Hubungi kami untuk informasi lebih lanjut tentang Rusunawa, fasilitas, dan layanan yang kami tawarkan.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Link
            href="mailto:therusunawa@gmail.com" // Tetap gunakan mailto
            className="inline-flex items-center justify-center bg-[#0D5EA6] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#0A4A87] transition-colors shadow-lg cursor-pointer "
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}