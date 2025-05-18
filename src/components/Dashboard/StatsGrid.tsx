import React from 'react';
import { StatsCard } from './StatsCard';
import { Bed, Clock, Calendar, Timer } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      id: 1,
      title: 'Patients Served',
      value: 0,
      change: -100,
      Icon: Bed,
    },
    {
      id: 2,
      title: 'Average Time per Token',
      value: 25,
      change: 40,
      unit: 'min',
      Icon: Clock,
    },
    {
      id: 3,
      title: 'No. of Shifts',
      value: 0,
      change: 100,
      Icon: Calendar,
    },
    {
      id: 4,
      title: 'Average Patient Waiting Time',
      value: 0,
      change: 100,
      unit: 'min',
      Icon: Timer,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatsCard key={stat.id} {...stat} />
      ))}
    </div>
  );
};