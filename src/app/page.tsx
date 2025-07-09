import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/aboutsection";
import Kegiatan from "../components/kegiatansection";
import Testimoni from "../components/testimoni"
import SectionHeader from "../components/ui/sectionheader";
import NewsSection from "../components/news";
import Footer from "@/components/ui/footer";
import Support from "@/components/support";

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
      id="testimoni"
      backgroundText="TESTIMONI"
      title="Apa Kata Mereka?"
      subtitle="Kami sangat menghargai setiap pengalaman dan cerita dari para penghuni. Berikut adalah beberapa testimoni dari mereka yang tinggal di rusunawa Kaligawe." 
      />
      <Testimoni />
      <SectionHeader
      id="news"
      backgroundText="NEWS AND FACTS"
      title="Kamu Harus Tahu!"
      subtitle="Berita terbaru dan fakta menarik seputar Rusunawa Kaligawe. Dapatkan informasi terkini tentang kegiatan, program, dan berita penting lainnya yang relevan dengan komunitas kami." 
      />
      <NewsSection />
      <Support/>
      <Footer />
      
    </>
  );
}
