import React from 'react';
import { Clock } from 'lucide-react';

const Attendance = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Attendance</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card bg-green-50 border border-green-100">
          <div className="flex items-center gap-3">
            <Clock className="text-green-600" size={24} />
            <div>
              <h3 className="text-sm font-medium text-green-800">Check In</h3>
              <p className="text-lg font-semibold text-green-900">09:00 AM</p>
            </div>
          </div>
        </div>

        <div className="card bg-red-50 border border-red-100">
          <div className="flex items-center gap-3">
            <Clock className="text-red-600" size={24} />
            <div>
              <h3 className="text-sm font-medium text-red-800">Check Out</h3>
              <p className="text-lg font-semibold text-red-900">06:00 PM</p>
            </div>
          </div>
        </div>

        <div className="card bg-blue-50 border border-blue-100">
          <h3 className="text-sm font-medium text-blue-800">Total Hours</h3>
          <p className="text-2xl font-semibold text-blue-900 mt-2">9h 00m</p>
          <p className="text-sm text-blue-600 mt-1">Today</p>
        </div>

        <div className="card bg-purple-50 border border-purple-100">
          <h3 className="text-sm font-medium text-purple-800">Overtime</h3>
          <p className="text-2xl font-semibold text-purple-900 mt-2">1h 00m</p>
          <p className="text-sm text-purple-600 mt-1">This week</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Attendance History</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Total Hours</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td>Mar 15, 2024</td>
                <td>09:00 AM</td>
                <td>06:00 PM</td>
                <td>9h 00m</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Present</span></td>
              </tr>
              <tr>
                <td>Mar 14, 2024</td>
                <td>08:55 AM</td>
                <td>06:30 PM</td>
                <td>9h 35m</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Present</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;