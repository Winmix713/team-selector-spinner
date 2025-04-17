import React from 'react';

interface Player {
  id: number;
  name: string;
  position: string;
  avatarUrl: string;
}

interface TeamLineupProps {
  players: Player[];
}

const TeamLineup: React.FC<TeamLineupProps> = ({ players }) => {
  return (
    <div className="bg-liga-card rounded-xl p-4 h-full">
      <h3 className="font-medium mb-4">Lineup</h3>
      
      <div className="relative">
        <div className="w-full h-80 bg-green-900/50 rounded-lg relative overflow-hidden">
          {/* Field markings */}
          <div className="absolute inset-0">
            {/* Center circle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-green-700/50 rounded-full"></div>
            {/* Center line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-green-700/50"></div>
            {/* Penalty areas */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-16 border-b-2 border-l-2 border-r-2 border-green-700/50"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-16 border-t-2 border-l-2 border-r-2 border-green-700/50"></div>
            {/* Goals */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white/20"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white/20"></div>
          </div>
          
          {/* Players */}
          <div className="squad-grid absolute inset-0 p-6">
            {/* Goalkeeper */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-liga-blue overflow-hidden">
                  <img 
                    src="https://i.pravatar.cc/40?img=12" 
                    alt="Player"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-white mt-1">GK</span>
              </div>
            </div>
            
            {/* Defenders */}
            <div className="absolute bottom-1/4 left-0 right-0 flex justify-around">
              {[1, 2, 3, 4].map((num) => (
                <div key={`def-${num}`} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-liga-blue overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/40?img=${13+num}`} 
                      alt="Player"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-white mt-1">DEF</span>
                </div>
              ))}
            </div>
            
            {/* Midfielders */}
            <div className="absolute top-1/3 left-0 right-0 flex justify-around">
              {[1, 2, 3].map((num) => (
                <div key={`mid-${num}`} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-liga-blue overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/40?img=${17+num}`} 
                      alt="Player"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-white mt-1">MID</span>
                </div>
              ))}
            </div>
            
            {/* Forwards */}
            <div className="absolute top-4 left-0 right-0 flex justify-around">
              {[1, 2, 3].map((num) => (
                <div key={`fwd-${num}`} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-liga-blue overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/40?img=${20+num}`} 
                      alt="Player"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-white mt-1">FWD</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLineup;
