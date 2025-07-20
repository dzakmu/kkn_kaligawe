'use client';

interface SectionHeaderProps {
  id?: string; 
  title?: string;
  subtitle?: string;
  backgroundText?: string;
}

export default function SectionHeader({ id, title, subtitle, backgroundText }: SectionHeaderProps) {
  return (
    <div id={id} className="relative py-12 md:py-16 bg-white overflow-hidden">
      {backgroundText && (
        <h2 className="absolute top-15 md:top-15 lg:top-24 sm:top-30
                         left-1/2 transform -translate-x-1/2
                         text-5xl sm:text-7xl md:text-[120px] lg:text-[100px] 
                         font-extrabold opacity-20
                         text-gradient-to-transparent
                         z-0 whitespace-nowrap select-none">
          {backgroundText}
        </h2>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12  md:mt-20 lg:mt-24">
        {title && (
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}