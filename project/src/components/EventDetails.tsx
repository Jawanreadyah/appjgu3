import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from './EventList';

const ticketCategories = [
  { id: 'vip', name: 'VIP', price: '$499', description: 'Best seats with exclusive merchandise' },
  { id: 'premium', name: 'Premium', price: '$299', description: 'Premium seating with great views' },
  { id: 'standard', name: 'Standard', price: '$199', description: 'Standard seating' },
  { id: 'general', name: 'General Admission', price: '$99', description: 'General admission area' }
];

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return <div className="text-white text-center py-12">Event not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-black/50 rounded-xl p-8 backdrop-blur-sm border border-yellow-900/30">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={event.image}
              alt={event.title}
              className="w-full rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">{event.title}</h1>
            <div className="space-y-4">
              {ticketCategories.map((category) => (
                <div 
                  key={category.id}
                  className="bg-black/70 rounded-lg p-4 border border-yellow-900/30 hover:border-yellow-500/50 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <span className="text-yellow-400 font-bold">{category.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                  <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                    Select Tickets
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}