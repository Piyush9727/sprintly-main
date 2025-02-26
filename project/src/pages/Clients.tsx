import React from 'react';
import { Plus } from 'lucide-react';

const Clients = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Add Client
        </button>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Contact Person</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td>Tech Corp</td>
                <td>Michael Brown</td>
                <td>michael@techcorp.com</td>
                <td>+1 234 567 8900</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
              </tr>
              <tr>
                <td>StartUp Inc</td>
                <td>Sarah Wilson</td>
                <td>sarah@startupinc.com</td>
                <td>+1 234 567 8901</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clients;