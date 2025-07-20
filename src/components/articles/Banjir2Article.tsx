'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lightbulb, RotateCcw, Send, Trophy } from 'lucide-react';

export default function BanjirInteractiveArticle() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(string | null)[]>(Array(3).fill(null));
    const [correctStates, setCorrectStates] = useState<(boolean | null)[]>(Array(3).fill(null));

    const questions = [
        {
            question: "Banjir tiba-tiba datang dan kamu harus segera evakuasi. Apa yang kamu lakukan terlebih dahulu?",
            options: [
                'Menyelamatkan televisi dan kulkas',
                'Membawa dokumen penting dan obat-obatan',
                'Menunggu air surut sambil memantau berita',
                'Mengambil pakaian sebanyak mungkin',
            ],
            correct: 'Membawa dokumen penting dan obat-obatan',
            explanation:
                'Dokumen penting seperti KTP, KK, dan dokumen kesehatan sangat dibutuhkan setelah evakuasi. Obat-obatan pribadi juga penting untuk menjaga kesehatan selama di pengungsian.',
        },
        {
            question: "Apa yang paling penting dilakukan setelah banjir surut?",
            options: [
                'Segera menyalakan listrik',
                'Membersihkan rumah dan memastikan air bersih',
                'Menonton berita',
                'Mengambil barang-barang dari luar',
            ],
            correct: 'Membersihkan rumah dan memastikan air bersih',
            explanation:
                'Membersihkan rumah dan memastikan air bersih sangat penting untuk mencegah penyakit dan memastikan lingkungan yang aman setelah banjir.',
        },
        {
            question: "Apa langkah terbaik untuk mencegah banjir di lingkunganmu?",
            options: [
                'Meninggikan rumah sendiri',
                'Menanam pohon dan menjaga saluran air',
                'Membeli perahu karet',
                'Menunggu bantuan pemerintah',
            ],
            correct: 'Menanam pohon dan menjaga saluran air',
            explanation:
                'Menanam pohon membantu menyerap air hujan dan menjaga saluran air bersih dari sampah sangat penting untuk mencegah banjir di lingkungan kita.',
        },
    ];

    const handleMultiAnswer = (answer: string) => {
        const isCorrect = answer === questions[currentQuestionIndex].correct;
        const newAnswers = [...answers];
        const newCorrects = [...correctStates];
        newAnswers[currentQuestionIndex] = answer;
        newCorrects[currentQuestionIndex] = isCorrect;
        setAnswers(newAnswers);
        setCorrectStates(newCorrects);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };


    const dampak = [
        {
            title: 'Kerugian Ekonomi',
            desc: `Banjir dapat menyebabkan kerugian ekonomi yang sangat besar. Rumah, kendaraan, dan barang-barang pribadi yang terendam air sering kali mengalami kerusakan parah dan membutuhkan biaya besar untuk perbaikan atau penggantian. Sektor usaha juga sangat terdampak, terutama UMKM yang tidak memiliki perlindungan finansial memadai. Selain itu, banjir dapat menghentikan produksi, distribusi, dan kegiatan ekonomi lainnya, yang pada akhirnya menurunkan pendapatan masyarakat dan daerah.`
        },
        {
            title: 'Terhentinya Aktivitas Sosial',
            desc: `Saat banjir terjadi, berbagai aktivitas sosial masyarakat ikut terhenti. Anak-anak tidak bisa bersekolah, pekerja tidak bisa pergi ke kantor, dan aktivitas keagamaan maupun komunitas terganggu. Selain mengganggu produktivitas, kondisi ini juga memengaruhi kesejahteraan mental dan psikososial masyarakat, terutama mereka yang harus mengungsi ke tempat penampungan dan kehilangan rutinitas sehari-hari.`
        },
        {
            title: 'Penyakit',
            desc: `Air banjir sangat rentan membawa berbagai patogen dan limbah berbahaya. Genangan air bisa menjadi tempat berkembang biaknya nyamuk penyebab demam berdarah, serta mengandung kotoran, limbah pabrik, atau limbah rumah tangga. Kontak dengan air banjir dapat menyebabkan penyakit seperti diare, leptospirosis, infeksi kulit, hingga gangguan pernapasan. Minimnya akses ke air bersih dan sanitasi yang layak memperburuk risiko kesehatan masyarakat.`
        },
        {
            title: 'Kerusakan Infrastruktur',
            desc: `Banjir dapat merusak infrastruktur vital seperti jalan, jembatan, saluran air, serta fasilitas umum seperti sekolah dan rumah sakit. Genangan yang terus-menerus melemahkan struktur bangunan dan jalan, menyebabkan keretakan hingga ambruk. Pemulihan infrastruktur pasca-banjir memerlukan waktu dan biaya besar, serta berdampak langsung pada aksesibilitas dan mobilitas masyarakat. Hal ini juga mengganggu layanan publik yang sangat dibutuhkan di masa darurat.`
        },
        {
            title: 'Kerusakan Lingkungan',
            desc: `Banjir membawa serta lumpur, limbah, dan bahan kimia yang mencemari tanah serta sumber air bersih. Proses ini mengganggu keseimbangan ekosistem lokal, membunuh flora dan fauna, serta merusak lahan pertanian. Erosi tanah juga sering terjadi akibat aliran air yang deras, yang dapat mempercepat degradasi lingkungan. Dalam jangka panjang, kerusakan ini berkontribusi terhadap perubahan iklim mikro dan berkurangnya daya dukung lingkungan terhadap kehidupan manusia.`
        },
    ];


    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <Card className="p-6 md:p-10 mt-15 shadow-xl rounded-2xl">
                <div className="text-sm text-gray-500 mb-4">
                    Ditulis oleh <span className="font-medium text-gray-700">Muhammad Dzaky</span> | 19 Juli 2025
                </div>

                <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
                    BANJIR: Bencana yang Datang Tanpa Peringatan
                </h1>

                <Image
                    src="/images/poster2.png"
                    alt="Poster Dampak dan Pencegahan Banjir"
                    width={800}
                    height={400}
                    className="rounded-xl mx-auto mb-6"
                />

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                    Banjir merupakan bencana yang sering kali datang tiba-tiba dan menimbulkan dampak besar bagi masyarakat. Dari kerusakan lingkungan hingga terganggunya kehidupan sosial, penting bagi kita untuk memahami dan mengantisipasinya.
                </p>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">🌪️ Dampak Banjir</h2>
                    <Accordion type="single" collapsible className="space-y-2">
                        {dampak.map((d, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger>{d.title}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-gray-700 text-justify">{d.desc}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">🛡️ Langkah Pencegahan Banjir</h2>
                    <ul className="space-y-4 text-gray-700">
                        <li>
                            <span className="font-semibold">1. Tidak Membuang Sampah Sembarangan</span>
                            <p className="mt-1 text-sm text-gray-600 text-justify">
                                Sampah yang dibuang ke sungai, saluran air, atau selokan dapat menyumbat aliran air dan menyebabkan banjir. Edukasi tentang pentingnya membuang sampah pada tempatnya harus dilakukan secara konsisten agar lingkungan tetap bersih dan sistem drainase berjalan lancar.
                            </p>
                        </li>
                        <li>
                            <span className="font-semibold">2. Membersihkan Saluran Air Secara Rutin</span>
                            <p className="mt-1 text-sm text-gray-600 text-justify">
                                Saluran air seperti got, parit, dan selokan perlu dibersihkan secara berkala dari lumpur dan sampah. Tindakan preventif ini mencegah penyumbatan aliran saat hujan deras dan memastikan air dapat mengalir dengan lancar menuju tempat pembuangan akhir.
                            </p>
                        </li>
                        <li>
                            <span className="font-semibold">3. Sosialisasi dan Edukasi di Lingkungan Sekitar</span>
                            <p className="mt-1 text-sm text-gray-600 text-justify">
                                Masyarakat perlu diberi pemahaman mengenai bahaya banjir dan cara-cara pencegahannya. Kegiatan seperti kampanye lingkungan, pelatihan kesiapsiagaan, dan penyuluhan sangat membantu membangun kesadaran kolektif dan mendorong partisipasi aktif warga dalam menjaga lingkungan.
                            </p>
                        </li>
                        <li>
                            <span className="font-semibold">4. Pembuatan Sumur Resapan</span>
                            <p className="mt-1 text-sm text-gray-600 text-justify">
                                Sumur resapan berfungsi menyerap air hujan ke dalam tanah sehingga mengurangi limpasan air di permukaan. Ini adalah solusi alami dan efektif untuk mencegah genangan air, terutama di daerah perkotaan yang didominasi oleh permukaan keras seperti aspal dan beton.
                            </p>
                        </li>
                    </ul>
                </div>


                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-[#0D5EA6] rounded">
                    <p className="font-semibold flex items-center gap-2">
                        🚨Fakta Menarik: <Badge variant="outline">Kerugian Miliaran Rupiah</Badge>
                    </p>
                    <p className="text-gray-700">
                        Kerugian ekonomi akibat banjir di Semarang diperkirakan mencapai lebih dari 50 miliar rupiah setiap tahun.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">🧠 Simulasi Kesiapsiagaan</h2>

                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">
                            Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
                        </span>
                        <div className="flex gap-1">
                            {questions.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${answers[idx]
                                        ? correctStates[idx]
                                            ? 'bg-green-500'
                                            : 'bg-red-400'
                                        : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="mb-4 text-gray-700 font-medium">{questions[currentQuestionIndex].question}</p>

                    <div className="space-y-2">
                        {questions[currentQuestionIndex].options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleMultiAnswer(option)}
                                disabled={!!answers[currentQuestionIndex]}
                                className={`w-full text-left border rounded px-4 py-2 transition flex items-center gap-2
                                    ${answers[currentQuestionIndex] === option
                                        ? correctStates[currentQuestionIndex]
                                            ? 'bg-green-100 border-green-400'
                                            : 'bg-red-100 border-red-400'
                                        : 'hover:bg-gray-100'
                                    }
                                    ${answers[currentQuestionIndex] ? 'cursor-not-allowed opacity-80' : ''}
                                `}
                            >
                                {answers[currentQuestionIndex] === option && (
                                    correctStates[currentQuestionIndex]
                                        ? <CheckCircle className="text-green-500 w-4 h-4" />
                                        : <span className="text-red-500 font-bold">✗</span>
                                )}
                                {option}
                            </button>
                        ))}
                    </div>

                    {answers[currentQuestionIndex] && (
                        <div className={`mt-4 p-4 rounded ${correctStates[currentQuestionIndex] ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            <strong>{correctStates[currentQuestionIndex] ? 'Tepat!' : 'Kurang Tepat!'}</strong>{' '}
                            {correctStates[currentQuestionIndex]
                                ? (
                                    <>
                                        Jawaban kamu sudah sesuai.<br />
                                        <span className="block mt-2 text-sm">{questions[currentQuestionIndex].explanation}</span>
                                    </>
                                )
                                : (
                                    <>
                                        Coba pikirkan ulang jawaban yang paling relevan.<br />
                                        <span className="block mt-2 text-sm">{questions[currentQuestionIndex].explanation}</span>
                                    </>
                                )
                            }
                        </div>
                    )}

                    <div className="flex justify-between mt-6">
                        <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0} variant="outline">
                            Sebelumnya
                        </Button>
                        <Button
                            onClick={nextQuestion}
                            disabled={
                                currentQuestionIndex === questions.length - 1 ||
                                !answers[currentQuestionIndex]
                            }
                        >
                            Selanjutnya
                        </Button>
                    </div>

                    {answers.every(a => a) && (
                        <div className="mt-8 p-6 bg-white border-l-4 border-[#0D5EA6] rounded-xl text-center shadow-lg animate-fade-in">
                            <h4 className="font-bold text-[#0D5EA6] mb-2 text-2xl flex items-center justify-center gap-2">
                                 Simulasi Selesai!
                                <Trophy className="w-5 h-5 animate-bounce" />
                            </h4>
                            <div className="flex justify-center items-center gap-4 mb-2">
                                <span className="bg-white px-4 py-2 rounded-full shadow text-[#0D5EA6] font-bold text-lg border border-blue-200">
                                    Skor kamu: {correctStates.filter(Boolean).length} / {questions.length}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow ${correctStates.filter(Boolean).length === questions.length ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {correctStates.filter(Boolean).length === questions.length ? 'Sempurna!' : 'Coba Lagi!'}
                                </span>
                            </div>
                            {correctStates.filter(Boolean).length === questions.length ? (
                                <p className="text-green-700 font-semibold text-lg flex items-center justify-center gap-2">
                                    Kamu sangat siap menghadapi banjir! <CheckCircle size={24} className="text-green-500" />  
                                </p>
                            ) : (
                                <p className="text-gray-700 text-base flex items-center justify-center gap-2">
                                    <Lightbulb className="w-6 h-6 animate-pulse " />
                                    Terus belajar dan tingkatkan kesiapsiagaanmu!
                                </p>
                            )}
                            <Button
                                className="mt-6 bg-[#0D5EA6] hover:bg-[#0A4A87] text-white font-bold shadow-lg transition-all px-6 py-2 rounded-full"
                                onClick={() => {
                                    setCurrentQuestionIndex(0);
                                    setAnswers(Array(questions.length).fill(null));
                                    setCorrectStates(Array(questions.length).fill(null));
                                }}
                            >
                                 <RotateCcw size={18} /> Ulangi Simulasi
                            </Button>
                            <div className="mt-4 flex justify-center gap-2">
                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow animate-fade-in">
                                    #SiapBanjir
                                </span>
                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow animate-fade-in">
                                    #BelajarBersama
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-10 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                        🌍 Ayo Jadi Bagian dari Perubahan
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Setiap aksi kecil, seperti membuang sampah pada tempatnya atau mengedukasi tetangga, bisa mencegah banjir besar! Yuk, mulai dari diri sendiri dan ajak orang lain.
                    </p>
                    <Button
                        className="bg-[#0D5EA6] hover:bg-[#0A4A87] text-white font-bold shadow-lg transition-all"
                        onClick={() => window.open('https://wa.me/?text=Yuk%20belajar%20tanggap%20banjir%20bersama%20artikel%20ini!%20https://rusunnawa.com', '_blank')}
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
