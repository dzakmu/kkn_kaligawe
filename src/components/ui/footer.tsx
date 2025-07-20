'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white py-16 lg:py-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 lg:gap-x-12 pb-12 lg:pb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center mb-4">
                            <h4 className="text-2xl md:text-3xl font-bold text-[#0D5EA6]">
                                Rumah Susun Kaligawe
                            </h4>
                        </Link>
                        <p className="text-gray-600 text-sm mb-6 max-w-xs lg:max-w-none">
                            Pusat Informasi dan Kegiatan Rumah Susun Kaligawe, Semarang. Temukan informasi terkini tentang kegiatan, dan umkm yang tersedia di Rusunawa Kaligawe.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-lg">Rusunnawa</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li><Link href="/#hero" className="hover:text-[#0D5EA6] transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-[#0D5EA6] transition-colors">About</Link></li>
                            <li className="flex items-center space-x-2">
                                <Link href="/#kegiatan" className="hover:text-[#0D5EA6] transition-colors">Kegiatan</Link>
                            </li>
                            <li><Link href="/#testimoni" className="hover:text-[#0D5EA6] transition-colors">Testimoni</Link></li>
                            <li><Link href="/#news" className="hover:text-[#0D5EA6] transition-colors">News & Facts</Link></li>
                            <li><Link href="/#support" className="hover:text-[#0D5EA6] transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2"> 
                        <h4 className="text-gray-900 font-semibold mb-4 text-lg">Alamat</h4>
                        <p className="text-gray-600 text-sm mb-4">
                            UPTD Rumah Susun Sewa Kota Semarang<br />
                            Dinas Perumahan dan Kawasan Permukiman Kota Semarang<br />
                            Kompleks Rusun Pekunden Jl. Pekunden
                        </p>
                        <h4 className="text-gray-900 font-semibold mb-2 text-lg">Jam Operasional</h4>
                        <p className="text-gray-600 text-sm">Senin - Kamis: 08.00 - 14.30 WIB</p>
                        <p className="text-gray-600 text-sm">Jumat: 08.00 - 11.30 WIB</p>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-lg">Hubungi</h4>
                        <ul className="space-y-3 text-gray-600 text-sm mb-8"> 
                            <li><p className="mb-1">No Telp</p> <p className="font-semibold text-gray-900 text-base mb-2">(024) - 860 422 51</p></li>
                            <li><p className="mb-1">Email</p> <Link href="mailto:therusunawa@gmail.com" className="font-semibold text-gray-900 text-base hover:text-[#0D5EA6] transition-colors">therusunawa@gmail.com</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
                    <div className="order-2 md:order-1 text-center md:text-left">
                        © {new Date().getFullYear()} Rumah Susun Kaligawe. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}