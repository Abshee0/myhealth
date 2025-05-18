import React from 'react';

interface DayProps {
  dayName: string;
  date: number;
}

const Day: React.FC<DayProps> = ({ dayName, date }) => (
  <div className="flex-1 border-r border-slate-700 last:border-r-0 min-h-[200px]">
    <div className="text-center border-b border-slate-700 py-2">
      <div className="text-slate-400 text-sm">{dayName}</div>
      <div className="text-white font-medium">{date}</div>
    </div>
    <div className="p-2 h-full"></div>
  </div>
);

export const WeekView: React.FC = () => {
  const days = [
    { dayName: 'Sun', date: 27 },
    { dayName: 'Mon', date: 28 },
    { dayName: 'Tue', date: 29 },
    { dayName: 'Wed', date: 30 },
    { dayName: 'Thu', date: 1 },
    { dayName: 'Fri', date: 2 },
    { dayName: 'Sat', date: 3 },
  ];

  return (
    <div className="flex divide-x divide-slate-700">
      {days.map((day) => (
        <Day key={day.date} dayName={day.dayName} date={day.date} />
      ))}
    </div>
  );
};