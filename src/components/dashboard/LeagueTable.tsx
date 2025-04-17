
import React from 'react';

interface TeamStats {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gd: number;
  points: number;
}

interface LeagueTableProps {
  teams: TeamStats[];
  title: string;
}

const LeagueTable: React.FC<LeagueTableProps> = ({ teams, title }) => {
  return (
    <div className="bg-liga-card rounded-xl p-4 h-full overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-liga-blue flex items-center justify-center text-white text-xs font-semibold">
            E
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-liga-text-muted text-left">
              <th className="pb-2 font-normal w-8">#</th>
              <th className="pb-2 font-normal">CLUB</th>
              <th className="pb-2 font-normal text-center">W</th>
              <th className="pb-2 font-normal text-center">D</th>
              <th className="pb-2 font-normal text-center">L</th>
              <th className="pb-2 font-normal text-center">GD</th>
              <th className="pb-2 font-normal text-center">PTS</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.name} className="league-table-row">
                <td className="py-2">{team.position}</td>
                <td className="py-2">{team.name}</td>
                <td className="py-2 text-center">{team.won}</td>
                <td className="py-2 text-center">{team.drawn}</td>
                <td className="py-2 text-center">{team.lost}</td>
                <td className="py-2 text-center">{team.gd}</td>
                <td className="py-2 text-center font-semibold">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
