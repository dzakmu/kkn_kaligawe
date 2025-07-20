import Head from "next/head";
import Navbar from "../components/ui/navbar";
import Hero from "../components/sections/hero";
import About from "../components/sections/aboutsection";
import Kegiatan from "../components/sections/kegiatansection";
import FAQ from "../components/sections/faq"
import SectionHeader from "../components/ui/sectionheader";
import NewsSection from "../components/sections/news";
import Footer from "@/components/ui/footer";
import Support from "@/components/sections/support";

export default function Home() {
  return (
    <>
      <Head>
      <title>Rusunnawa Kaligawe</title>
      <meta name="description" content="Rusunnawa Kaligawe" />
      </Head>
      <Navbar />
      <Hero />
      <SectionHeader
      id="about"
      backgroundText="ABOUT" 
      title="Lebih Tahu Tentang Rusunawa"
      subtitle="Temukan informasi lengkap mengenai Rusunawa, lokasi, detail, serta peran kami dalam menyediakan hunian yang nyaman dan terjangkau bagi masyarakat, serta dukungan kami terhadap UMKM lokal." 
      />
      <About />
      <SectionHeader
      id="kegiatan"
      backgroundText="KEGIATAN" 
      title="Apa Saja Program Kita?" 
      subtitle="Kami berkomitmen untuk meningkatkan kualitas hidup masyarakat melalui berbagai program dan kegiatan yang bermanfaat, termasuk pemberdayaan UMKM. Temukan lebih banyak tentang inisiatif kami di sini." 
      />
      <Kegiatan />
      <SectionHeader
      id="news"
      backgroundText="NEWS"
      title="Kamu Harus Tahu!"
      subtitle="Berita terbaru dan fakta menarik seputar Rusunawa Kaligawe. Dapatkan informasi terkini tentang kegiatan, program, dan berita penting lainnya yang relevan dengan komunitas kami." 
      />
      <NewsSection />
      <SectionHeader
      id="faq"
      backgroundText="FAQ"
      title="Apa Saja Pertanyaan yang Sering Diajukan?"
      subtitle="Temukan jawaban atas pertanyaan umum seputar Rusunawa Kaligawe. Kami menyediakan informasi lengkap mengenai fasilitas, pendaftaran, biaya sewa, dan lainnya untuk membantu Anda memahami lebih baik."
      />
      <FAQ />
      <Support/>
      <Footer />
      
    </>
  );
}
