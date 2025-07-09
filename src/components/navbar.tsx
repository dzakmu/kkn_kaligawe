"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${ 
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent" 
      }`}
    >
      <div className="flex justify-between items-center px-6 py-0 max-w-7xl mx-auto"> 
        <Link href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-[#0D5EA6] hover:text-[#0A4A87] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="none" stroke="#0D5EA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11.5L12 4l9 7.5" />
            <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
            <rect x="9" y="14" width="6" height="6" rx="1" />
          </svg>
          Rusunnawa Kaligawe
        </Link>

        <ul className="hidden md:flex gap-8 lg:gap-10"> 
          <li className="group relative">
            <Link href="/#about" className="text-gray-700 font-medium hover:text-[#0D5EA6] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D5EA6] after:transition-all after:duration-300 group-hover:after:w-full">
              About
            </Link>
          </li>
          <li className="group relative">
            <Link href="/#kegiatan" className="text-gray-700 font-medium hover:text-[#0D5EA6] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D5EA6] after:transition-all after:duration-300 group-hover:after:w-full">
              Kegiatan
            </Link>
          </li>
          <li className="group relative">
            <Link href="/#testimoni" className="text-gray-700 font-medium hover:text-[#0D5EA6] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D5EA6] after:transition-all after:duration-300 group-hover:after:w-full">
              Testimoni
            </Link>
          </li>
          <li className="group relative">
            <Link href="/#news" className="text-gray-700 font-medium hover:text-[#0D5EA6] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D5EA6] after:transition-all after:duration-300 group-hover:after:w-full">
              News & Facts
            </Link>
          </li>
          <li className="group relative">
            <Link href="/#support" className="text-gray-700 font-medium hover:text-[#0D5EA6] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D5EA6] after:transition-all after:duration-300 group-hover:after:w-full">
              Support
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#0D5EA6] transition-colors focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> // Close icon (X)
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-[#0D5EA6] transition-colors focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 text-xl font-medium pt-8">
          <li><Link href="/#about" onClick={closeMobileMenu} className="text-gray-800 hover:text-[#0D5EA6] transition-colors">About</Link></li>
          <li><Link href="/#kegiatan" onClick={closeMobileMenu} className="text-gray-800 hover:text-[#0D5EA6] transition-colors">Kegiatan</Link></li>
          <li><Link href="/#testimoni" onClick={closeMobileMenu} className="text-gray-800 hover:text-[#0D5EA6] transition-colors">Testimoni</Link></li>
          <li><Link href="/#news" onClick={closeMobileMenu} className="text-gray-800 hover:text-[#0D5EA6] transition-colors">News & Facts</Link></li>
          <li><Link href="/#support" onClick={closeMobileMenu} className="text-gray-800 hover:text-[#0D5EA6] transition-colors">Support</Link></li>
        </ul>
      </div>
    </nav>
  );
}