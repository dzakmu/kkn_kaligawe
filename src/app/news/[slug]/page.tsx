import { notFound } from 'next/navigation';
import { getNewsData, getSortedNewsData } from '@/lib/news';
import Navbar from '@/components/navbar';
import Footer from '@/components/ui/footer';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  const allNews = getSortedNewsData();
  return allNews.map(({ slug }) => ({ slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const newsItem = await getNewsData(slug);
  if (!newsItem) notFound();

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <Image
              src={newsItem.imageUrl}
              alt={newsItem.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span>{newsItem.author}</span>
              <span className="mx-2">|</span>
              <span>{newsItem.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {newsItem.title}
            </h1>
            <div
              className="prose prose-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: newsItem.contentHtml }}
            />
            <div className="mt-8">
              <Link href="/#news" className="text-[#0D5EA6] hover:text-[#0A4A87] font-medium">
                &larr; Kembali ke Berita Lainnya
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
