import React from 'react';
import { X, Search } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientInfo?: {
    id: string;
    name: string;
    age: string;
    gender: string;
    nationality: string;
    contact: string;
    email: string;
    address: string;
    insurance: string;
  };
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  patientInfo
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-lg w-[900px] max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10">
          <h2 className="text-xl font-semibold text-white">New Appointment</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {patientInfo && (
          <div className="p-6 border-b border-slate-800 bg-slate-800/50">
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-400">ID Card</label>
                  <div className="mt-1 text-white">{patientInfo.id}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Patient Name</label>
                  <div className="mt-1 text-white">{patientInfo.name}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Age</label>
                  <div className="mt-1 text-white">{patientInfo.age}</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-400">Gender</label>
                  <div className="mt-1 text-white">{patientInfo.gender}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Nationality</label>
                  <div className="mt-1 text-white">{patientInfo.nationality}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Contact No</label>
                  <div className="mt-1">
                    <a href={`tel:${patientInfo.contact}`} className="text-indigo-400 hover:text-indigo-300">
                      {patientInfo.contact}
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-400">Email</label>
                  <div className="mt-1 text-slate-500">{patientInfo.email || '-'}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Address</label>
                  <div className="mt-1 text-white">{patientInfo.address}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400">Insurance</label>
                  <div className="mt-1 text-white">{patientInfo.insurance}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <form className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Service Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value="Abshee"
                readOnly
                className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Visit Type
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="out-patient">Out Patient</option>
                <option value="in-patient">In Patient</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Collection Center <span className="text-red-500">*</span>
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Collection Center</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Insurance Scheme
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="aasandha">Aasandha</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Facility <span className="text-red-500">*</span>
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="medlab">Medlab Diagnostics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Medical Department
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Department</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Medical Clinic
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Clinic</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Doctor
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Doctor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Service Provider
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Provider</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Professional
              </label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Professional</option>
              </select>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-white">Service Details</h3>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD FROM PRESCRIPTIONS
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Service"
                className="w-full bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
            </div>

            <div className="mt-4 border border-slate-700 rounded-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-800">
                  <tr className="text-sm text-slate-400">
                    <th className="p-3">Code</th>
                    <th className="p-3">Service Name</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Total</th>
                    <th className="p-3">Insurance mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center text-slate-400">
                    <td colSpan={6} className="p-4">No Services</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

        <div className="p-6 border-t border-slate-800 flex justify-end space-x-4 sticky bottom-0 bg-slate-900">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Appointment
          </button>
        </div>
      </div>
    </div>
  );
};