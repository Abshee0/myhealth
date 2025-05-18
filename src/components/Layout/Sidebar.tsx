import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block bg-slate-900 w-64 p-4 border-r border-slate-800">
      <div className="text-white">
        <h2 className="text-lg font-semibold mb-4">side bar</h2>
        {/* Sidebar content would go here */}
      </div>
    </aside>
  );
};