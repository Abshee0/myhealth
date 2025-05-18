import React, { useState } from 'react';
import { StatsGrid } from './StatsGrid';
import { Calendar } from './Calendar/Calendar';

export const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<'day' | 'week' | 'month'>('week');
  
  return (
    <div className="space-y-6">
      <StatsGrid />
      
      <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-white text-lg font-medium">Schedule</h2>
          <div className="flex space-x-1 bg-slate-800 rounded-md p-1">
            {(['day', 'week', 'month'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  activeView === view
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <Calendar view={activeView} />
      </div>
    </div>
  );
};