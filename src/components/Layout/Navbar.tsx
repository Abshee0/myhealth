import React, { useState } from 'react';
import { Bell, User, ChevronDown } from 'lucide-react';
import { NavDropdown } from './NavDropdown';

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = {
    General: {
      Company: ['Company Information', 'Facilities', 'Medical Departments', 'Medical Clinics', 'Facility Types', 'Collection Centers', 'Service Agents'],
      Dashboard: ['Dashboard', 'Reminders', 'Messages'],
      Geographics: ['Countries', 'Atolls', 'Islands'],
      Que: ['Ques', 'Que Displays', 'Que Token Systems', 'Que Tokens'],
      Staff: ['Duty Roster', 'Duty Shifts', 'Duty Types']
    },
    'Master Data': {
      Gestures: ['Nationalities', 'Religions', 'Blood Groups', 'Genders', 'Martial Status'],
      Clinical: ['Professional types', 'Allergies', 'Cancelled reasons', 'Medical certificate types', 'Medical conditions', 'Vital groups', 'Vitals', 'Admissions', 'Bed types', 'Wards', 'Beds'],
      Finance: ['Price lists', 'Insurance schemes', 'Credit partys', 'Payment types', 'Vendors', 'Brands'],
      'ICD Codes': ['ICD categories', 'ICD codes', 'ICD code user mappings'],
      Medicines: ['Medicines', 'Generic names', 'Medicine preperations', 'Medicine remarks'],
      Patients: ['Patients', 'Patient types', 'Memo types', 'Appointment types', 'Enquiry types'],
      Insurance: ['ICD categories', 'ICD codes', 'Services', 'Generic names', 'Medicines', 'Service providers', 'Users', 'Professional types', 'Service provider services', 'Consumable categories', 'Consumables', 'Vitals', 'Medicine remarks'],
      'Service management': ['Service categories', 'Service levels', 'Services', 'Service ub categories', 'Consumables'],
      Laboratory: ['Sample types', 'Test groups', 'Bacode groups', 'Medical equipments']
    },
    Transactions: {
      'Front office': ['Reception', 'Appointments', 'Memos', 'Waitlists', 'Service counters'],
      'Doctors Module': ['Prescription'],
      'Nurses Module': ['Prescription', 'In patients'],
      Finance: ['Bills', 'Shift end reports'],
      Laboratory: ['Phlebotomy', 'Samples']
    },
    System: {
      General: ['Document types', 'Relationships', 'Address types', 'Report designer', 'Workstations', 'Ticket types', 'Tickets', 'Record status', 'Configurations', 'Workflows'],
      'Forms & Templates': ['Field types', 'Forms manager', 'Templates', 'Layouts', 'Contracts'],
      Security: ['Users', 'Roles', 'User favourite service packages', 'User favourite medicine packages', 'Public users', 'User types']
    }
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <h1 className="text-white text-xl font-semibold">My Health</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {Object.entries(menuItems).map(([category, items]) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setActiveDropdown(category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-2 py-1 text-sm font-medium transition-colors flex items-center ${
                  activeDropdown === category
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {category}
                <ChevronDown size={14} className="ml-1" />
              </button>
              {activeDropdown === category && (
                <NavDropdown items={items} />
              )}
            </div>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="relative text-slate-300 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white cursor-pointer">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};