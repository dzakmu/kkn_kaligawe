'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
        }`}
    >
      <div className="flex justify-between items-center px-6 py-0 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-[#0D5EA6] hover:text-[#0A4A87] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0D5EA6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11.5L12 4l9 7.5" />
            <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
            <rect x="9" y="14" width="6" height="6" rx="1" />
          </svg>
          Rusunawa Kaligawe
        </Link>

        <ul className="hidden md:flex gap-8 lg:gap-10">
          {["About", "Kegiatan", "News", "FAQ", "Support"].map((menu) => (
            <li key={menu} className="group relative">
              <Link
                href={`/#${menu.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-[#0D5EA6] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D5EA6] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-gray-700 hover:text-[#0D5EA6] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 z-[100] bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ backgroundColor: 'white' }} // untuk memastikan tidak mewarisi transparansi
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="text-gray-700 hover:text-[#0D5EA6]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-start pl-8 gap-6 text-lg font-medium">
          {["About", "Kegiatan", "News", "FAQ", "Support"].map((menu) => (
            <li key={menu}>
              <Link
                href={`/#${menu.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-[#0D5EA6] transition-colors"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </nav>
  );
}
