
import React from 'react';

interface StadiumCardProps {
  name: string;
  attendance: string;
  image?: string;
}

const StadiumCard: React.FC<StadiumCardProps> = ({ name, attendance, image }) => {
  return (
    <div className="bg-liga-card rounded-xl overflow-hidden h-full">
      <div className="relative h-32">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: image ? `url(${image})` : 'linear-gradient(to right, #334155, #1e293b)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-medium">{name}</h3>
          <div className="flex items-center">
            <p className="text-sm text-gray-300">Daily attendance</p>
            <span className="ml-2 text-sm font-bold">{attendance}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StadiumCard;
