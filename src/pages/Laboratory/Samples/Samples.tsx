import React from 'react';
import { FileDown, Printer, RefreshCw } from 'lucide-react';

export const Samples: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Samples</h1>
      </div>

      <div className="bg-slate-900 rounded-lg border border-slate-800">
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Test Group
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>TOXICOLOGY ANALYSIS</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Memo No
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="From"
                  className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="To"
                  className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Barcode
              </label>
              <input
                type="text"
                placeholder="Barcode"
                className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                ID/Passport
              </label>
              <input
                type="text"
                placeholder="Document No"
                className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Lab No
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="From"
                  className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="To"
                  className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center">
              <FileDown size={16} className="mr-2" />
              EXPORT REPORTS (ZIP)
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center">
              <Printer size={16} className="mr-2" />
              PRINT WORK SHEETS
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center">
              <Printer size={16} className="mr-2" />
              PRINT PROTOCOL
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              ACCEPT SAMPLES
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center">
              <RefreshCw size={16} className="mr-2" />
              REFRESH
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-slate-400 border-y border-slate-800">
                <th className="p-4">Date</th>
                <th className="p-4">Memo No</th>
                <th className="p-4">ID/Passport</th>
                <th className="p-4">Patient Name</th>
                <th className="p-4">Barcode</th>
                <th className="p-4">Lab No Date</th>
                <th className="p-4">Lab No</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Facility</th>
                <th className="p-4">Collection Center</th>
                <th className="p-4">Service Provider</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="text-slate-400 text-center">
                <td colSpan={12} className="p-4">
                  No Data
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <span>Total 0</span>
            <select className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1">
              <option>50/page</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 text-sm text-slate-400 hover:text-white disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-2 py-1 text-sm text-slate-400 hover:text-white disabled:opacity-50">
              Next
            </button>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-slate-400">Go to</span>
              <input
                type="text"
                className="w-12 bg-slate-800 border border-slate-700 rounded-md px-2 py-1 text-white text-sm"
                value="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};