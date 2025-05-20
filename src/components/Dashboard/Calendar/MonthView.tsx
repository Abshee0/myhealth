import React from 'react';

interface CalendarCellProps {
  date: number | null;
  isCurrentMonth?: boolean;
  hasEvent?: boolean;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ 
  date, 
  isCurrentMonth = true,
  hasEvent = false,
}) => (
  <div className={`border-r border-b border-slate-700 last:border-r-0 p-2 h-24`}>
    {date !== null && (
      <div className="flex flex-col h-full">
        <span className={`inline-block w-6 h-6 text-center rounded-full ${
          isCurrentMonth ? 'text-white' : 'text-slate-500'
        }`}>
          {date}
        </span>
        
        <div className="flex-1">
          {hasEvent && (
            <div className="mt-2 p-1 text-xs bg-indigo-900/40 text-indigo-300 rounded border border-indigo-800">
              Meeting with Aiman
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

export const MonthView: React.FC = () => {
  // Sample month view data - would be dynamic in a real app
  const weeks = [
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div>
      <div className="grid grid-cols-7 border-b border-slate-700">
        {daysOfWeek.map((day) => (
          <div 
            key={day} 
            className="text-center py-2 text-slate-400 font-medium border-r border-slate-700 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7">
        {weeks.flat().map((date, i) => (
          <CalendarCell 
            key={i} 
            date={date} 
            isCurrentMonth={i >= 4 && i <= 30} 
            hasEvent={date === 15}
          />
        ))}
      </div>
    </div>
  );
};