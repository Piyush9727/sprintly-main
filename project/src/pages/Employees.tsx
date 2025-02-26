import React from 'react';
import { Plus } from 'lucide-react';

const Employees = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Employees</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Add Employee
        </button>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Email</th>
                <th>Status</th>
                <th>Projects</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces"
                    alt="Sarah Wilson"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">Sarah Wilson</div>
                    <div className="text-sm text-gray-500">ID: EMP001</div>
                  </div>
                </td>
                <td>Senior Developer</td>
                <td>Engineering</td>
                <td>sarah.w@company.com</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                <td>3 Projects</td>
              </tr>
              <tr>
                <td className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces"
                    alt="John Doe"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-gray-500">ID: EMP002</div>
                  </div>
                </td>
                <td>UI Designer</td>
                <td>Design</td>
                <td>john.d@company.com</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                <td>2 Projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;