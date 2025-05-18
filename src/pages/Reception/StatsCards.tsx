import React from 'react';
import { Bed, Clock, Calendar, Timer } from 'lucide-react';

export const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Patients Served',
      value: 0,
      change: -100,
      Icon: Bed,
    },
    {
      title: 'Average Time per Token',
      value: 25,
      change: 40,
      unit: 'min',
      Icon: Clock,
    },
    {
      title: 'No. of Shifts',
      value: 0,
      change: -100,
      Icon: Calendar,
    },
    {
      title: 'Average Patient Waiting Time',
      value: 0,
      change: -100,
      unit: 'min',
      Icon: Timer,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-900 rounded-lg p-4 border border-slate-800"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-slate-400 text-sm font-medium">{stat.title}</h3>
              <p className="text-white text-2xl font-bold mt-1">
                {stat.value}
                {stat.unit && <span className="text-lg ml-1">{stat.unit}</span>}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
              <stat.Icon size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm ${
                stat.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {stat.change}%
            </span>
            <span className="text-slate-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
};