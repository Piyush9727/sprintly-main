import React from 'react';
import { Plus } from 'lucide-react';

const Leave = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Leave Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Request Leave
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card bg-blue-50 border border-blue-100">
          <h3 className="text-sm font-medium text-blue-800">Annual Leave</h3>
          <p className="text-2xl font-semibold text-blue-900 mt-2">15 days</p>
          <p className="text-sm text-blue-600 mt-1">5 days used</p>
        </div>

        <div className="card bg-green-50 border border-green-100">
          <h3 className="text-sm font-medium text-green-800">Sick Leave</h3>
          <p className="text-2xl font-semibold text-green-900 mt-2">10 days</p>
          <p className="text-sm text-green-600 mt-1">2 days used</p>
        </div>

        <div className="card bg-purple-50 border border-purple-100">
          <h3 className="text-sm font-medium text-purple-800">Personal Leave</h3>
          <p className="text-2xl font-semibold text-purple-900 mt-2">5 days</p>
          <p className="text-sm text-purple-600 mt-1">1 day used</p>
        </div>

        <div className="card bg-yellow-50 border border-yellow-100">
          <h3 className="text-sm font-medium text-yellow-800">Unpaid Leave</h3>
          <p className="text-2xl font-semibold text-yellow-900 mt-2">Unlimited</p>
          <p className="text-sm text-yellow-600 mt-1">0 days used</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Leave History</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Days</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td>Annual Leave</td>
                <td>Mar 15, 2024</td>
                <td>Mar 20, 2024</td>
                <td>5 days</td>
                <td>Vacation</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
              </tr>
              <tr>
                <td>Sick Leave</td>
                <td>Mar 10, 2024</td>
                <td>Mar 11, 2024</td>
                <td>2 days</td>
                <td>Medical</td>
                <td><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leave;