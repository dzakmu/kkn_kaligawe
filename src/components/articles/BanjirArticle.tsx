'use client';

import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function BanjirArticle() {
  const tips = [
    {
      title: 'Evakuasi ke Tempat Aman',
      content: `Langkah pertama dan terpenting adalah memastikan keselamatan Anda dan orang-orang terdekat. Jika air mulai masuk ke rumah, segera naik ke lantai atas atau pindah ke tempat yang lebih tinggi dan aman. Pastikan semua anggota keluarga, terutama anak-anak dan lansia, berada dalam jangkauan Anda dan aman.`
    },
    {
      title: 'Amankan Barang Berharga',
      content: `Letakkan dokumen penting, obat-obatan, dan barang elektronik di tempat yang lebih tinggi dan tahan air.`
    },
    {
      title: 'Putuskan Aliran Listrik',
      content: `Begitu air mulai menggenang atau jika Anda melihat genangan air di sekitar rumah, segera cabut semua sambungan listrik dari stopkontak utama. Ini sangat penting untuk mencegah sengatan listrik yang berbahaya. Jika ragu atau tidak aman untuk melakukannya sendiri, jangan sentuh panel listrik dan segera keluar dari area tersebut.`
    },
    {
      title: 'Jauhi Aliran Air atau Selokan',
      content: `Saluran air dan gorong-gorong bisa menjadi sangat berbahaya saat banjir, karena bisa menciptakan daya isap yang kuat atau mengandung puing-puing tajam yang tidak terlihat. Jauhi area ini agar tidak tersedot atau terluka.`
    },
    {
      title: 'Tetap Tenang dan Cari Bantuan',
      content: `Dalam situasi panik, sulit untuk berpikir jernih. Usahakan untuk tetap tenang dan hubungi tim penyelamat atau otoritas setempat jika Anda membutuhkan bantuan. Berikan informasi lokasi yang jelas dan kondisi Anda. Gunakan telepon seluler hanya untuk panggilan darurat untuk menghemat baterai.'
`
    },
    {
      title: 'Gunakan Air Bersih dan Higienis',
      content: `Hindari menggunakan air banjir untuk minum atau masak. Gunakan air kemasan atau rebus air terlebih dahulu. Karena air banjir bisa jadi mengandung kuman yang dapat menyebabkan penyakit, seperti sakit perut, muntah-muntah, demam, dsb.
`
    },
    {
      title: 'Setelah Surut, Bersihkan!',
      content: `Gunakan alat pelindung saat membersihkan rumah dari lumpur dan kotoran setelah banjir.`
    },
  ];

  const questions = [
    {
      question: 'Air mulai masuk ke dalam rumah, apa yang pertama kali kamu lakukan?',
      options: [
        { text: 'Cabut aliran listrik dan pindah ke tempat tinggi', isCorrect: true, explanation: 'Benar! Menghindari sengatan listrik dan mencari tempat aman adalah prioritas utama.' },
        { text: 'Menyelamatkan barang-barang elektronik dulu', isCorrect: false, explanation: 'Kurang tepat. Barang bisa diganti, nyawa tidak. Utamakan keselamatan!' },
        { text: 'Menunggu bantuan datang', isCorrect: false, explanation: 'Tindakan pasif berisiko. Bertindak cepat sangat penting saat banjir mulai masuk.' },
      ],
    },
    {
      question: 'Kamu melihat air semakin tinggi, apa langkah berikutnya?',
      options: [
        { text: 'Menghubungi layanan darurat', isCorrect: true, explanation: 'Betul! Menginformasikan lokasi dan kondisi akan membantu petugas mengevakuasi lebih cepat.' },
        { text: 'Merekam video untuk media sosial', isCorrect: false, explanation: 'Kurang bijak di situasi darurat. Fokus utamakan keselamatan.' },
        { text: 'Berlari ke luar rumah tanpa arah', isCorrect: false, explanation: 'Sangat berbahaya. Tetap tenang dan pilih jalur aman.' },
      ],
    },
    {
      question: 'Setelah banjir surut, kamu harus...',
      options: [
        { text: 'Langsung kembali ke rumah dan hidup seperti biasa', isCorrect: false, explanation: 'Salah. Pastikan rumah aman dan tidak ada kerusakan listrik atau struktural dulu.' },
        { text: 'Membersihkan rumah dengan alat pelindung diri', isCorrect: true, explanation: 'Tepat. Air banjir bisa membawa bakteri dan zat berbahaya, gunakan sarung tangan dan masker.' },
        { text: 'Menyalakan listrik secepatnya', isCorrect: false, explanation: 'Sangat berbahaya! Periksa semua instalasi dulu oleh profesional.' },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = questions[step];

  const handleOption = (index: number) => {
    setSelected(index);
    setShowExplanation(true);
  };

  const nextStep = () => {
    setStep(step + 1);
    setSelected(null);
    setShowExplanation(false);
  };

  const [checklist, setChecklist] = useState([
    { item: 'Dokumen penting dalam plastik tahan air', checked: false },
    { item: 'Obat-obatan pribadi dan P3K', checked: false },
    { item: 'Power bank dan baterai cadangan', checked: false },
    { item: 'Radio portabel dan senter', checked: false },
  ]);

  const toggleChecklist = (index: number) => {
    const updated = [...checklist];
    updated[index].checked = !updated[index].checked;
    setChecklist(updated);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Card className="p-6 md:p-10 mt-15 shadow-xl rounded-2xl">
        <div className="text-sm text-gray-500 mb-4">
          <span>Ditulis oleh <span className="font-medium text-gray-700">Muhammad Dzaky</span></span>
          <span className="mx-2">|</span>
          <span>18 Juli 2025</span>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Banjir? Bagaimana Menghadapinya?
        </h1>

        <Image
          src="/images/poster1.png"
          alt="Poster Pencegahan Banjir"
          width={800}
          height={400}
          className="rounded-xl mx-auto mb-6"
        />

        <p className="mb-4 text-gray-700 leading-relaxed text-justify">
          Salah satu permasalahan dari rusunawa Kaligawe ini adalah banjir. Banjir adalah bencana yang dapat terjadi kapan saja, dan bertindak cepat serta tepat adalah kunci untuk menjaga keselamatan diri dan keluarga. Berikut adalah 7 cara menghadapi banjir agar dampaknya dapat diminimalisir:
        </p>

        <Accordion type="single" collapsible className="space-y-2">
          {tips.map((tip, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                {index + 1}. {tip.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 leading-relaxed">{tip.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
          <p className="font-semibold flex items-center gap-2">
            📊 Fakta Penting: <Badge variant="outline">40% Wilayah Semarang</Badge>
          </p>
          <p className="text-gray-700">
            berada dalam zona rawan banjir setiap musim hujan. Ini menunjukkan pentingnya kesiapsiagaan sejak dini.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">✅ Checklist Kesiapsiagaan</h2>
          <ul className="space-y-2">
            {checklist.map((item, idx) => (
              <li
                key={idx}
                onClick={() => toggleChecklist(idx)}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all ${item.checked ? 'bg-green-100' : 'hover:bg-gray-100'
                  }`}
              >
                <CheckCircle className={`w-5 h-5 ${item.checked ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={item.checked ? 'line-through text-gray-500' : 'text-gray-800'}>
                  {item.item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">🧭 Simulasi Tanggap Banjir</h2>

          <p className="font-medium mb-4">{current.question}</p>

          <div className="space-y-2 mb-4">
            {current.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOption(idx)}
                className={`w-full text-left px-4 py-2 rounded border transition-all
              ${selected === idx
                    ? opt.isCorrect
                      ? 'bg-green-100 border-green-400 text-green-800'
                      : 'bg-red-100 border-red-400 text-red-800'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}
            `}
                disabled={showExplanation}
              >
                {opt.text}
              </button>
            ))}
          </div>

          {showExplanation && selected !== null && (
            <div className="p-4 rounded bg-gray-50 border-l-4 mb-4
          ${current.options[selected].isCorrect ? 'border-green-600' : 'border-red-600'}
        ">
              <p className="text-sm text-gray-700">{current.options[selected].explanation}</p>
            </div>
          )}

          {showExplanation && step < questions.length - 1 && (
            <Button className="bg-[#0D5EA6] hover:bg-[#0A4A87]" onClick={nextStep}>Lanjut </Button>
          )}

          {showExplanation && step === questions.length - 1 && (
            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="animate-bounce">
                <span className="text-4xl">🎉</span>
              </div>
              <p className="text-green-700 font-bold text-lg text-center flex justify-center items-center gap-2">
                Selamat! Kamu telah menyelesaikan simulasi tanggap banjir
                <CheckCircle size={24} className="text-green-700" />
              </p>

              <p className="text-gray-700 text-center">
                Semoga kamu makin siap menghadapi banjir dan bisa membantu orang lain!
              </p>
              <Button
                className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  setStep(0);
                  setSelected(null);
                  setShowExplanation(false);
                }}
              >
                Ulangi Simulasi
              </Button>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
            🌍 Ayo Jadi Bagian dari Perubahan
          </h3>
          <p className="text-gray-600 mb-4">
            Setiap langkah kecil bisa berdampak besar. Mulai dari menyiapkan diri, menjaga kebersihan lingkungan, hingga menyebarkan informasi penting soal kesiapsiagaan banjir—semua itu bisa menyelamatkan nyawa. Yuk, jadi bagian dari gerakan sadar bencana mulai hari ini!
          </p>

          <Button
            className="bg-[#0D5EA6] hover:bg-[#0A4A87] text-white font-bold shadow-lg transition-all"
            onClick={() => window.open(
              'https://wa.me/?text=Yuk%20belajar%20cara%20menghadapi%20banjir%20dari%20artikel%20ini!%20https://rusunnawakaligawe.vercel.app/news/menghadapi_banjir',
              '_blank'
            )}
          >
            <Send className="w-5 h-5" /> Bagikan Artikel Ini
          </Button>
          <div className="mt-4 flex justify-center gap-4">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow">
              #AksiNyata
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow">
              #CegahBanjir
            </span>
          </div>
        </div>
      </Card>
    </section>
  );
}
