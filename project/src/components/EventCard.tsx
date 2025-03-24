import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  image: string;
}

export default function EventCard({ id, title, image }: EventCardProps) {
  const navigate = useNavigate();

  const handleTicketClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/event/${id}`);
  };

  return (
    <div className="flex flex-col h-full bg-black/20 p-4 rounded-3xl">
      <div className="aspect-[3/4] mb-4 overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-4 px-2">
        <h3 className="text-lg font-semibold text-white line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <button 
          onClick={handleTicketClick}
          className="w-full mt-auto bg-yellow-600 text-white py-3 rounded-xl hover:bg-yellow-700 transition-colors font-semibold"
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
}