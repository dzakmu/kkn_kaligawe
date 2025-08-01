'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion'; 

const kegiatanItems = [
  {
    id: 1,
    category: 'Kegiatan Masyarakat',
    title: 'Kerja Bakti',
    description: 'Kegiatan gotong royong membersihkan lingkungan rusun, seperti menyapu halaman, membuang sampah, dan merapikan fasilitas umum bersama warga. Kerja Bakti ini dilakukan setiap bulan sekali untuk menjaga kebersihan dan kenyamanan lingkungan.',
    imageUrl: '/images/kerja_bakti.jpg',
  },
  {
    id: 2,
    category: 'Kegiatan Masyarakat',
    title: 'PKK',
    description: 'PKK (Pemberdayaan Kesejahteraan Keluarga) adalah organisasi kemasyarakatan yang berfokus pada pemberdayaan perempuan dan keluarga. Kegiatan PKK di rusun meliputi penyuluhan kesehatan, pelatihan keterampilan, pengelolaan posyandu, serta program peningkatan kesejahteraan keluarga.',
    imageUrl: '/images/pkk.webp',
  },
  {
    id: 3,
    category: 'Kegiatan Masyarakat',
    title: 'Senam Bersama',
    description: 'Kegiatan senam dilaksanakan rutin setiap minggu sore dihalaman rusun. Kegiatan ini bertujuan untuk meningkatkan kesehatan dan kebugaran warga, serta mempererat tali silaturahmi antarwarga. Untuk senam itu sendiri dikenai biaya sebesar Rp 5000,- per orang untuk biaya konsumsi setiap minggunya',
    imageUrl: '/images/senam.jpg',
  },
  {
    id: 4,
    category: 'Kegiatan Masyarakat',
    title: 'Posyandu',
    description: 'Posyandu (Pos Pelayanan Terpadu) adalah layanan kesehatan yang menyediakan pemeriksaan kesehatan ibu, anak, bahkan lansia. Kegiatan posyandu ini meliputi penimbangan berat badan, pengukuran tinggi badan untuk balita dan anak - anak, pengukuran tensi dan pemeriksaan kadar gula darah untuk orang dewasa, serta penyuluhan kesehatan. Posyandu di rusun dilaksanakan setiap bulan pada hari jumat tepatnya di minggu kedua pada pukul 9.00 - 11.00.',
    imageUrl: '/images/posyandu.jpg',
    span: 'md:col-span-2',
  },
  {
    id: 5,
    category: 'Kegiatan Masyarakat',
    title: 'PJN (Pemberantasan Jentik Nyamuk)',
    description: 'PJN (Pemberantasan Jentik Nyamuk) adalah program yang bertujuan untuk mengurangi populasi nyamuk dengan cara memberantas jentik nyamuk di lingkungan rusun. Kegiatan ini meliputi penyuluhan tentang pentingnya menjaga kebersihan lingkungan, pemeriksaan tempat-tempat yang berpotensi menjadi sarang nyamuk, dan tindakan pencegahan lainnya. Kegiatan ini dilakukan setiap minggu pada hari jumat.',
    imageUrl: '/images/pjn2.jpg',
    span: 'md:row-span-2', 
  },
  {
    id: 6,
    category: 'UMKM',
    title: 'Toko Kelontong dan Sembako ',
    description: 'Menyediakan berbagai kebutuhan sehari-hari seperti sembako, makanan ringan, dan minuman. Toko ini menjadi pilihan utama bagi warga rusunawa Kaligawe untuk memenuhi kebutuhan sehari-hari dengan harga terjangkau. Toko ini ada disetiap blok rusunawa.',
    imageUrl: '/images/toko.png',
  },
  {
    id: 7,
    category: 'UMKM',
    title: 'Warung Makan Sederhana',
    description: ' Menyediakan berbagai masakan rumahan yang lezat dan terjangkau. Cocok untuk sarapan, makan siang, atau makan malam. Juga terdapat gorengan dan minuman segar. Lokasinya terletak persis di depan rusunnawa Kaligawe Blok A.',
    imageUrl: '/images/warung.jpg',
    span: 'md:row-span-2', 
  },
  {
    id: 8,
    category: 'UMKM',
    title: 'Bandeng Presto Barokah "Dua Putri',
    description: 'Menyediakan berbagai olahan bandeng presto yang lezat dan gurih. Tersedia bandeng presto yang cocok untuk berbagai hidangan. Lokasinya terletak di Rusunawa Kaligawe Blok G Lt 5 No 8, Kaligawe, Kota Semarang, Jawa Tengah 50164. Berikut adalah nomor kontak yang bisa dihubungi: 0882-2723-1513',
    imageUrl: '/images/bandeng.png',
    span: 'md:row-span-2', 
  },
  {
    id: 9,
    category: 'UMKM',
    title: 'Aneka Seblak',
    description: 'Menyediakan berbagai macam seblak dengan cita rasa yang lezat dan pedas. Tersedia seblak ceker, seblak kerupuk, seblak mie, dan masih banyak lagi. Cocok untuk kamu yang suka makanan pedas dan gurih. Lokasinya terletak di depan rusunawa Kaligawe.',
    imageUrl: '/images/seblak.png',
    // span: 'md:row-span-2', 
  },
  {
    id: 10,
    category: 'UMKM',
    title: 'Potong Rambut',
    description: 'Menyediakan layanan potong rambut dengan harga terjangkau. Toko ini menjadi pilihan bagi warga rusunawa Kaligawe untuk memenuhi kebutuhan potong rambut dengan kualitas yang baik. Layanan ini terletak di samping warung makan sederhana di depan rusunawa Kaligawe Blok A.',
    imageUrl: '/images/tukang_cukur.png',
  },
  {
    id: 11,
    category: 'Kegiatan Masyarakat',
    title: 'Perayaan Agustusan',
    description: 'Perayaan Agustusan adalah kegiatan yang diadakan setiap tahun untuk memperingati hari kemerdekaan Republik Indonesia. Kegiatan ini meliputi berbagai lomba, pentas seni, jalan santai, senam bersama, dsb. Kegiatan ini biasanya dilakukan per RW.',
    imageUrl: '/images/agustusan1.png',
  }
];

export default function KegiatanSection() {
  const categories = ['All', 'Kegiatan Masyarakat', 'UMKM'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);


  const filteredItems = activeCategory === 'All'
    ? kegiatanItems
    : kegiatanItems.filter(item => item.category === activeCategory);

  const handleMouseEnter = (itemId: number) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="kegiatan-section" className="py-12 lg:py-0"> 
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                activeCategory === category
                  ? 'bg-[#0D5EA6] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#0D5EA6] hover:text-[#0D5EA6]'
                }`
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id} 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`bg-white rounded-xl shadow-lg overflow-hidden relative cursor-pointer group ${item.span || 'h-80'}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-all duration-300 ${hoveredItemId === item.id ? 'filter blur-sm scale-105' : 'scale-100'}`}
                  />
                </div>

                <div className="absolute inset-0 z-10"> 
                    <div
                        className={`absolute inset-0 bg-grey-100 bg-opacity-50 flex flex-col justify-end p-6 text-white transition-opacity duration-300 ${
                            hoveredItemId === item.id ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="flex items-end justify-between">
                            <div>
                                <h3 className="text-xl font-bold leading-tight">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-sm opacity-80 text-gray-200 mt-1">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            <div className="w-[2px] h-12 bg-[#0D5EA6] ml-4"></div> 
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}