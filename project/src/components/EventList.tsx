import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: "1",
    title: "Anirudh Hukum Concert | The Hukum Tour",
    image: "https://pbs.twimg.com/media/GlvqxpCWoAANSR2.jpg:large",
  },
  {
    id: "2",
    title: "AAOKOSHA PERUNNAL 2025",
    image: "https://i.ibb.co/KpDm7DtJ/IMG-20250323-WA0003.jpg",
  },
  {
    id: "3",
    title: "RAGANILAVU - Manajri Live in Concert",
    image: "https://i.ibb.co/Hf1rCHgQ/IMG-20250322-WA0062.jpg",
  },
  {
    id: "4",
    title: "Coldplay World Tour",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
  }
];

export default function EventList() {
  return (
    <div className="bg-black/40 py-16">
      <main className="max-w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Latest Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {events.map((event) => (
            <div key={event.id} className="flex justify-center">
              <div className="w-full max-w-sm">
                <EventCard {...event} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export { events };