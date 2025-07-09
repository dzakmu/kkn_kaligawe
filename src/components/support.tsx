'use client';

import React from 'react';

export default function CTABanner() {
  return (
    <section id="support" className="relative py-16 lg:py-[70px] bg-gradient-to-r from-white via-blue-50 to-white overflow-hidden">
      <h2 className="absolute top-0 left-2/8 transform -translate-x-1/2
                     text-[80px] md:text-[120px] lg:text-[100px]
                     font-extrabold opacity-20
                     text-gradient-to-transparent
                     z-0 whitespace-nowrap select-none">
        SUPPORT
      </h2>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative z-10"> {/* Tambahkan relative z-10 di sini */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Butuh Hunian? <br /> Rusun Aja
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Kami siap membantu Anda menemukan hunian yang nyaman dan terjangkau. Hubungi kami untuk informasi lebih lanjut tentang Rusunawa, fasilitas, dan layanan yang kami tawarkan.
          </p>
        </div>

        <div className="flex-shrink-0">
            <a
            href="mailto:therusunawa@gmail.com"
            className="bg-[#0D5EA6] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#6d99be] transition-colors shadow-md inline-block"
            >
              Hubungi Kami
            </a>
        </div>
      </div>
    </section>
  );
}