import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';
import { getSortedNewsData } from '@/lib/news';

export default async function NewsSection() {
  const newsItems = getSortedNewsData();

  return (
    <section id="news" className="py-0 px-10 sm:px-20 lg:px-32 xl:px-40 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(await newsItems).map((item) => (
          <Card key={item.slug} className="relative overflow-hidden rounded-xl shadow-lg">
            <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden group">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:filter group-hover:blur-sm group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-grey-100 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/news/${item.slug}`}>
                  <button className="bg-[#0D5EA6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0A4A87] transition-colors">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <Link href={`/news/${item.slug}`} className="block p-4 bg-white">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{item.author}</span>
                <svg className="h-4 w-4 ml-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight hover:text-[#0D5EA6] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
            </Link>
          </Card>
        ))}
      </div>
    </section >
  );
}
