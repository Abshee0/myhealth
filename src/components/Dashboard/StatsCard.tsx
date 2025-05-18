import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  change: number;
  unit?: string;
  Icon: LucideIcon;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  unit = '',
  Icon,
}) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 transition-transform hover:translate-y-[-2px]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
          <p className="text-white text-2xl font-bold">
            {value}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </p>
        </div>
        <div className="p-3 rounded-full bg-slate-800 text-slate-300">
          <Icon size={22} />
        </div>
      </div>
      
      <div className="mt-3 flex items-center">
        <span className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <ArrowUp size={16} className="mr-1" />
          ) : (
            <ArrowDown size={16} className="mr-1" />
          )}
          {Math.abs(change)}%
        </span>
        <span className="text-slate-400 text-sm ml-2">vs last month</span>
      </div>
    </div>
  );
};