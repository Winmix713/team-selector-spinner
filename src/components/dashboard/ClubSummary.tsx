
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ClubSummaryProps {
  clubName: string;
  location: string;
  logoSrc?: string;
}

const ClubSummary: React.FC<ClubSummaryProps> = ({ 
  clubName, 
  location, 
  logoSrc 
}) => {
  return (
    <div className="bg-yellow-500/10 rounded-xl p-6 relative overflow-hidden">
      <div className="flex items-start">
        <div className="mr-4">
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt={`${clubName} logo`} 
              className="w-16 h-16"
            />
          ) : (
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
              {clubName.substring(0, 2)}
            </div>
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-bold">{clubName}</h2>
          <p className="text-liga-text-muted">{location}</p>
          
          <div className="flex mt-4 space-x-1">
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">WINS</span>
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">15</span>
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded ml-2">LOSSES</span>
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">7</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 flex items-center text-green-500">
        <TrendingUp className="w-4 h-4 mr-1" />
        <span className="text-sm font-medium">+24 %</span>
      </div>
    </div>
  );
};

export default ClubSummary;
