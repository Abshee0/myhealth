import React from 'react';

export const DayView: React.FC = () => {
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM
  
  return (
    <div className="p-4">
      <h3 className="text-white text-lg font-medium mb-4">Wednesday, 30</h3>
      <div className="space-y-4">
        {hours.map((hour) => (
          <div key={hour} className="flex border-b border-slate-800 pb-2">
            <div className="w-20 text-slate-400 font-medium">
              {hour % 12 === 0 ? 12 : hour % 12} {hour < 12 ? 'AM' : 'PM'}
            </div>
            <div className="flex-1 min-h-[40px] border-l border-slate-700 pl-4">
              {/* Appointments would go here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};