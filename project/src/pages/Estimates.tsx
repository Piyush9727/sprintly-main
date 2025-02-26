import React from 'react';
import { Search } from 'lucide-react';

const Estimates = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Project Estimates</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search estimates..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Client</th>
                <th>Start Date</th>
                <th>Duration</th>
                <th>Estimated Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td>Website Redesign</td>
                <td>Tech Corp</td>
                <td>Mar 15, 2024</td>
                <td>2 months</td>
                <td>$25,000</td>
                <td><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
              </tr>
              <tr>
                <td>E-commerce Platform</td>
                <td>Fashion Co</td>
                <td>Apr 1, 2024</td>
                <td>3 months</td>
                <td>$45,000</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Estimates;