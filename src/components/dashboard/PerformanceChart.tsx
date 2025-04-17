
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface PerformanceChartProps {
  data: {
    name: string;
    value: number;
  }[];
  color?: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ 
  data,
  color = "#3b82f6"
}) => {
  return (
    <div className="bg-liga-card rounded-xl p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Training pace</h3>
        <div className="text-xs text-green-500 flex items-center">
          <span className="font-medium">+24 %</span>
        </div>
      </div>
      
      <div className="performance-chart">
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-liga-background border border-gray-800 p-2 rounded text-xs">
                      <p className="font-medium">{`${payload[0].value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>08:00</span>
        <span>10:00</span>
        <span>12:00</span>
        <span>14:00</span>
        <span>16:00</span>
      </div>
    </div>
  );
};

export default PerformanceChart;
