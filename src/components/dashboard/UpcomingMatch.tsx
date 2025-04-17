
import React from 'react';
import { Play } from 'lucide-react';

interface UpcomingMatchProps {
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
  isLive?: boolean;
}

const UpcomingMatch: React.FC<UpcomingMatchProps> = ({
  homeTeam,
  awayTeam,
  time,
  date,
  homeTeamLogo,
  awayTeamLogo,
  isLive = false
}) => {
  return (
    <div className="bg-liga-card rounded-xl p-4 h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">{time}</h3>
          <p className="text-sm text-liga-text-muted">Today</p>
        </div>
        
        {isLive && (
          <div className="flex items-center space-x-2">
            <span className="bg-liga-red w-2 h-2 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-liga-text-muted">LIVE</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center mb-6">
        <div className="flex-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {homeTeamLogo ? (
                <img src={homeTeamLogo} alt={homeTeam} className="w-10 h-10 object-contain" />
              ) : (
                <span className="font-bold text-black">{homeTeam.substring(0, 2)}</span>
              )}
            </div>
          </div>
          <p className="text-sm font-medium">{homeTeam}</p>
        </div>
        
        <div className="px-4">
          <span className="text-lg font-bold">vs</span>
        </div>
        
        <div className="flex-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {awayTeamLogo ? (
                <img src={awayTeamLogo} alt={awayTeam} className="w-10 h-10 object-contain" />
              ) : (
                <span className="font-bold text-black">{awayTeam.substring(0, 2)}</span>
              )}
            </div>
          </div>
          <p className="text-sm font-medium">{awayTeam}</p>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="flex-1 bg-liga-accent text-black font-medium rounded-md py-2 flex items-center justify-center">
          <Play className="w-4 h-4 mr-2" />
          <span>Live match</span>
        </button>
        <button className="flex-1 bg-gray-800 text-white font-medium rounded-md py-2">
          Broadcast
        </button>
      </div>
    </div>
  );
};

export default UpcomingMatch;
