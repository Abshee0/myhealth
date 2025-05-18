import React from 'react';
import { User } from 'lucide-react';

export const PatientInfo: React.FC = () => {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
      <div className="flex">
        <div className="w-32 h-32 bg-slate-800 rounded-lg flex items-center justify-center">
          <User size={48} className="text-slate-600" />
        </div>
        <div className="ml-6 flex-1 grid grid-cols-3 gap-6">
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400">ID Card</label>
                <div className="mt-1 text-white">A220116</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Patient Name</label>
                <div className="mt-1 text-white">Mohamed Aiman</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Age</label>
                <div className="mt-1 text-white">29Y, 1M, 3D</div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400">Gender</label>
                <div className="mt-1 text-white">Male</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Nationality</label>
                <div className="mt-1 text-white">Maldivian</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Contact No</label>
                <div className="mt-1">
                  <a href="tel:9556555" className="text-indigo-400 hover:text-indigo-300">9556555</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400">Email</label>
                <div className="mt-1 text-slate-500">-</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Address</label>
                <div className="mt-1 text-white">169-2-03, Kaaf. HULHUMALE</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Insurance</label>
                <div className="mt-1 text-white">Aasandha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};