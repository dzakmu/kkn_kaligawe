'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion'; 

const tabs = ['Tentang Kita', 'Lokasi', 'Detail'];

interface ContentWithImageLeftProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
}

const ContentWithImageLeft = ({ imageUrl, imageAlt, title, paragraphs}: ContentWithImageLeftProps) => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 pt-8 md:pt-12 lg:pt-16">
    <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] flex items-center justify-center order-1 lg:order-1">
      <div className={`relative w-[90%] h-[90%] md:w-[80%] md:h-[80%] bg-white rounded-xl shadow-xl overflow-hidden z-10 `}> 
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>

    <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h3>
      {paragraphs.map((para, index) => (
        <p key={index} className="text-gray-600 text-base mb-4 leading-relaxed">
          {para}
        </p>
      ))}
    </div>
  </div>
);

interface ContentWithImageRightProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
}

const ContentWithImageRight = ({ imageUrl, imageAlt, title, paragraphs}: ContentWithImageRightProps) => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 pt-8 md:pt-12 lg:pt-16">
    <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h3>
      {paragraphs.map((para, index) => (
        <p key={index} className="text-gray-600 text-base mb-4 leading-relaxed">
          {para}
        </p>
      ))}
    </div>
    <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] flex items-center justify-center order-1 lg:order-2">
      <div className={`relative w-[90%] h-[90%] md:w-[80%] md:h-[80%] bg-white rounded-xl shadow-xl overflow-hidden z-10`}> 
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  </div>
);

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('Tentang Kita');

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="about" className="relative py-0 lg:py-2 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-center border-b border-gray-200 gap-10 mb-0 md:mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${ 
                activeTab === tab
                  ? 'text-[#0D5EA6]'
                  : 'text-gray-800 hover:text-[#0D5EA6]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#0D5EA6] rounded-full transition-all duration-300 group-hover:w-full"></span> 
              )}
            </button>
          ))}
        </div>

        <div className="mt-2"> 
          <AnimatePresence mode='wait'>
            {activeTab === 'Tentang Kita' && (
              <motion.div
                key="tentang-kita-tab"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ContentWithImageLeft
                  imageUrl="/images/rusun3.png"
                  imageAlt="Rusunawa Kaligawe"
                  title="Rusunawa Kaligawe"
                  paragraphs={[
                    "Rusunawa Kaligawe adalah hunian vertikal yang terletak di Semarang, Jawa Tengah. Dikelola oleh Perum Perumnas, hunian ini menawarkan fasilitas modern dan akses mudah ke berbagai layanan publik. Dengan desain yang nyaman dan aman, Rusunawa Kaligawe menjadi pilihan ideal bagi keluarga yang mencari hunian murah di tengah kota.",
                    "Kami berkomitmen untuk menyediakan hunian yang berkualitas dengan harga terjangkau. Dengan berbagai fasilitas seperti taman bermain, area parkir. Rusunawa Kaligawe memberikan kenyamanan dan keamanan bagi penghuninya.",
                  ]}
                />
              </motion.div>
            )}

            {activeTab === 'Lokasi' && (
              <motion.div
                key="lokasi-tab"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ContentWithImageRight
                  imageUrl="/images/denah.png"
                  imageAlt="Lokasi Rusunawa Kaligawe"
                  title="Lokasi Strategis di Semarang"
                  paragraphs={[
                   
                  ]}
                />
              </motion.div>
            )}

            {activeTab === 'Detail' && (
              <motion.div
                key="detail-tab"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ContentWithImageLeft
                  imageUrl="/images/rusun2.png"
                  imageAlt="Rusunawa Kaligawe"
                  title="Detail Rusunawa Kaligawe"
                  paragraphs={[
                    "Rusunawa Kaligawe terletak sekitar 3 km ke arah timur Kota Demak, tepatnya di Kelurahan Kaligawe, Kecamatan Gayamsari. Bangunan ini didirikan pada tahun 2004/2009 di atas lahan seluas 24.000 m² dengan luas bangunan sekitar 500 m². Terdapat 96 unit rumah yang terbagi dalam 7 Twin Blok (TB).",
                    "Untuk hunian Blok A – C, biaya sewa per bulan adalah Rp. 100.000 untuk lantai II, Rp. 90.000 untuk lantai III, dan Rp. 65.000 untuk lantai IV. Sementara itu, Blok D – G memiliki tarif sewa Rp. 110.000 untuk lantai II, Rp. 100.000 untuk lantai III, Rp. 90.000 untuk lantai IV, dan Rp. 70.000 untuk lantai V. Hingga saat ini, belum ada renovasi besar yang dilakukan pada bangunan ini."
                  ]}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}