import React, { useState, useEffect } from 'react';

const banners = [
  {
    image: "https://admine.q-tickets.com/uploads/mediaseo/Banner133861623553679693.webp",
    alt: "Music festival"
  },
  {
    image: "https://admine.q-tickets.com/uploads/mediaseo/BANNER133868756339595525.webp",
    alt: "Concert"
  },
  {
    image: "https://admine.q-tickets.com/uploads/mediaseo/Banner133869276557527343.webp",
    alt: "Sports event"
  },
  {
    image: "https://admine.q-tickets.com/uploads/mediaseo/Banner133865775109918486.webp",
    alt: "Theater show"
  }
];

export default function FeaturedSection() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/40 py-8">
      <div className="max-w-[90%] mx-auto">
        <div className="relative w-full overflow-hidden rounded-[2.5rem]" style={{ height: "60vh" }}>
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          </div>
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentBanner === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}