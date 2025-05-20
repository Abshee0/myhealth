import React, { useState } from 'react';
import { Search, RefreshCw, Check, BoxSelect, BookCheck } from 'lucide-react';

interface PatientInfoProps {
  isVisible: boolean;
}

const PatientInfo: React.FC<PatientInfoProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      <div className="space-y-4">
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

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400">Address</label>
          <div className="mt-1 text-white">HulhuMalé Flat no 169-2-03, Kaaf. HULHUMALÉ</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-400">Contact No</label>
            <div className="mt-1 flex items-center">
              <span className="text-white">9556555</span>
              <Check size={16} className="ml-2 text-green-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400">Email</label>
            <div className="mt-1 flex items-center">
              <span className="text-white">aiman@medlabdiagnostics.com</span>
              <Check size={16} className="ml-2 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400">Patient Type</label>
          <div className="mt-1 text-white">Maldivians</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400">Insurance Scheme</label>
          <div className="mt-1 text-white">Aasandha</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400">Nationality</label>
          <div className="mt-1 text-white">Maldivian</div>
        </div>
      </div>
    </div>
  );
};

export const Phlebotomy: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPatientInfo, setShowPatientInfo] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'a220116' || searchQuery.toLowerCase() === 'mohamed aiman') {
      setShowPatientInfo(true);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowPatientInfo(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Phlebotomy</h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 bg-slate-900 rounded-lg border border-slate-800">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-lg font-medium text-white">Patient Info</div>
              
            </div>
            <div className="flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search by ID or name..."
                  className="w-48 bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
              </form>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Memo Number"
                  className="w-48 bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
              </div>
            </div>
          </div>

          <PatientInfo isVisible={showPatientInfo} />

          <div className='m-4 flex justify-end'>
            <button 
                className={`px-4 py-2 mr-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                  !showPatientInfo ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!showPatientInfo}
              >
                COLLECT SAMPLES
              </button>
              <button 
                className='px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 opacity-50 cursor-not-allowed'
                disabled
              >
                CREATE SAMPLES
              </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-slate-400 border-y border-slate-800">
                  <th className="p-4">Color</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Barcode</th>
                  <th className="p-4">Test Code</th>
                  <th className="p-4">Test Name</th>
                  <th className="p-4">Sample Type</th>
                  <th className="p-4">Memo No</th>
                  <th className="p-4">Lab No</th>
                  <th className="p-4">Date Time</th>
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Facility</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Select</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {showPatientInfo  ? (
                <tr 
                  className="text-slate-300 hover:bg-slate-800 cursor-pointer"
                  
                >
                  <td className="p-4 bg-black"></td>
                  <td className="p-4">S</td>
                  <td className="p-4">BC123456</td>
                  <td className="p-4">L0007</td>
                  <td className="p-4">Erythrocyte Sedimentation Rate (ESR)</td>
                  <td className="p-4">ESR</td>
                  <td className="p-4">47653</td>
                  <td className="p-4">LB</td>
                  <td className="p-4">2024-03-25</td>
                  <td className="p-4">Mohamed Aiman</td>
                  <td className="p-4">Medlab Diagnostics</td>
                  <td className="p-4">Finalized</td>
                  <td className='p-4'><input type='checkbox' className='h-4 w-4 border text-slate-900 border-slate-700 bg-slate-900 rounded-lg focus:ring-2 focus:ring-slate-900 focus:outline-none checked:bg-slate-800 checked:text-slate-800 ' /> </td>
                </tr>
              ) : (
                <tr className="text-slate-400 text-center">
                  <td colSpan={12} className="p-4">
                    No Data
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg border border-slate-800">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="text-lg font-medium text-white">Notifications</div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              RELOAD
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-slate-400 border-b border-slate-800">
                  <th className="p-4">Memo No</th>
                  <th className="p-4">ID/Passport</th>
                  <th className="p-4">Patient</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Collection Center</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr 
                  className="text-slate-300 hover:bg-slate-800 cursor-pointer"             
                >
                  <td className="p-4">47653</td>
                  <td className="p-4">A220116</td>
                  <td className="p-4">Mohamed Aiman</td>
                  <td className="p-4">Pending</td>
                  <td className="p-4">Medlab Diagnostics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};