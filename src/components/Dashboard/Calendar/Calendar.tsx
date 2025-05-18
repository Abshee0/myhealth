import React from 'react';
import { WeekView } from './WeekView';
import { MonthView } from './MonthView';
import { DayView } from './DayView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  view: 'day' | 'week' | 'month';
}

export const Calendar: React.FC<CalendarProps> = ({ view }) => {
  return (
    <div className="border-t border-slate-800">
      <div className="flex justify-between items-center p-3 bg-slate-800/50">
        <button className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-slate-700 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="text-white font-medium">Previous</div>
        <div className="text-white font-medium">Next</div>
        <button className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-slate-700 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      
      {view === 'day' && <DayView />}
      {view === 'week' && <WeekView />}
      {view === 'month' && <MonthView />}
    </div>
  );
};