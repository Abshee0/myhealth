import React from 'react';
import { FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-3 px-4 text-slate-400 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          © 2025 My Health. All rights reserved.
        </div>
        <div className="flex items-center space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};