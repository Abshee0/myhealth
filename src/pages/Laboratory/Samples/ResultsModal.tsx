import React from 'react';
import { X } from 'lucide-react';

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResultsModal: React.FC<ResultsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-lg w-[900px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10">
          <h2 className="text-xl font-semibold text-white">Results</h2>
          <div className="flex items-center space-x-2">
            <button className=" bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
            Revert to Preliminary (All)
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
              Print Report
            </button>
            <button
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              onClick={onClose}
            >
              <X size={25} className="text-slate-500" />
            </button>
          </div>
        </div>

        {/* Patient Info */}
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h3 className="text-lg font-semibold text-white mb-4">Patient Info</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-400">ID Card</label>
                <div className="mt-1 text-white">A220116</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Patient Name</label>
                <div className="mt-1 text-white">Mohamed Aiman (Male)</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Age</label>
                <div className="mt-1 text-white">29Y, 1M, 3D</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-400">Address</label>
                <div className="mt-1 text-white">HulhuMalé Flat no 169-2-03, Kaaf. HULHUMALÉ</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Contact</label>
                <div className="mt-1 text-indigo-400 hover:text-indigo-300 cursor-pointer">9556555</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Email</label>
                <div className="mt-1 text-slate-400">aiman@example.com</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-400">Patient Type</label>
                <div className="mt-1 text-white">Maldivians</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Insurance Scheme</label>
                <div className="mt-1 text-white flex items-center">
                  Aasandha 
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400">Price List</label>
                <div className="mt-1 text-white">Aasandha</div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 p-6 border-b border-slate-800 bg-slate-900 justify-between">
          <div className='space-x-2'>
            <button className="bg-slate-700 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-600">
            Memo
          </button>
          <button className="bg-slate-700 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-600">
            Prescription
          </button>
          </div>
          
          
        </div>

        {/* Report Section */}
        <div className="p-6">
          <div className="border border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-orange-500/20 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="text-orange-300 font-medium">ESR (Erythrocyte Sedimentation Rate)</div>
              <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
                  HESR59075
                </div>
              </div>
              <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
                  Reported by: Riyasha
                </div>
            </div>

            <div className="p-4 flex items-center justify-between border-b border-slate-700">
              <div>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  Finalized
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
                  Revert to Preliminary
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
                  Print Report
                </button>
              </div>
            </div>

            <table className="w-full">
              <thead className="bg-slate-800 text-slate-400">
                <tr>
                  <th className="text-left p-4">Parameter</th>
                  <th className="text-left p-4">Result</th>
                  <th className="text-left p-4">Unit</th>
                  <th className="text-left p-4">Reference Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700 text-white">
                  <td className="p-4">Erythrocyte Sedimentation Rate (ESR)</td>
                  <td className="p-4">
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded">
                      45
                    </span>
                  </td>
                  <td className="p-4">mm/Hr</td>
                  <td className="p-4">0 - 8</td>
                </tr>
              </tbody>
            </table>

            
          </div>
          <div className="p-4 border border-slate-700 rounded-lg mt-2 hover:bg-slate-800">
              <button className="text-slate-300 hover:text-white flex items-center">
                History
                <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  4
                </span>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
