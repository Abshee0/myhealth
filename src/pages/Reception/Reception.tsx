import React, { useState } from 'react';
import { Search, RefreshCw, Plus } from 'lucide-react';
import { PatientInfo } from './PatientInfo';
import { AppointmentsTable } from './AppointmentsTable';
import { StatsCards } from './StatsCards';
import { AppointmentModal } from './AppointmentModal';
import { AddPatientModal } from './AddPatientModal';

export const Reception: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPatientInfo, setShowPatientInfo] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

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

  const demoPatient = {
    id: 'A220116',
    name: 'Mohamed Aiman',
    age: '29Y, 1M, 3D',
    gender: 'Male',
    nationality: 'Maldivian',
    contact: '9556555',
    email: '',
    address: '169-2-03, Kaaf. HULHUMALE',
    insurance: 'Aasandha'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold text-white">Front Office</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsAddPatientModalOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add Patient
          </button>
          <button
            onClick={() => setIsAppointmentModalOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
          >
            <Plus size={16} className="mr-2" />
            New Appointment
          </button>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by ID or name..."
              className="w-80 px-4 py-2 text-sm text-white bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-slate-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
            >
              <Search size={18} />
            </button>
          </form>
          <button className="p-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800">
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {showPatientInfo && (
        <>
          <PatientInfo />
          <StatsCards />
        </>
      )}
      
      <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800">
          <h2 className="text-lg font-medium text-white">Appointments</h2>
        </div>
        <AppointmentsTable />
      </div>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        patientInfo={showPatientInfo ? demoPatient : undefined}
      />

      <AddPatientModal
        isOpen={isAddPatientModalOpen}
        onClose={() => setIsAddPatientModalOpen(false)}
      />
    </div>
  );
};