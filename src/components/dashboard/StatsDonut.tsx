
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface StatsDonutProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
}

const StatsDonut: React.FC<StatsDonutProps> = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-liga-card rounded-xl p-4 h-full">
      <h3 className="font-medium mb-4">{title}</h3>
      
      <div className="flex">
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-1/2">
          <div className="stats-radar h-64">
            <div className="flex items-center justify-center h-full">
              <div className="space-y-4">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }} 
                    />
                    <span className="text-sm">{item.name}</span>
                    <span className="ml-auto text-sm font-medium">
                      {Math.round((item.value / total) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDonut;
