'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BannerEnum } from '@/app/utils';

// Convert enum values to array of image paths
const banners: string[] = Object.values(BannerEnum);

const BannerCarousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  // Automatically change banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg shadow-md">
      {/* Images */}
      {banners.map((img: string, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={img}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {banners.map((_, index: number) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
