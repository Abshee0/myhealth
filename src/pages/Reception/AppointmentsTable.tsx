import React from 'react';

export const AppointmentsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm font-medium text-slate-400 border-b border-slate-800">
            <th className="p-4">MEMO NO</th>
            <th className="p-4">DEPARTMENT</th>
            <th className="p-4">DOCTOR</th>
            <th className="p-4">LOCATION</th>
            <th className="p-4">START TIME</th>
            <th className="p-4">TOKEN NO</th>
            <th className="p-4">STATUS</th>
            <th className="p-4">APPOINTMENT TYPE</th>
            <th className="p-4">ENQUIRY TYPE</th>
            <th className="p-4">CONTACT NO</th>
            <th className="p-4">FACILITY</th>
            <th className="p-4">USER</th>
            <th className="p-4">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="text-slate-400 text-center">
            <td colSpan={13} className="p-4">
              No records found 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};