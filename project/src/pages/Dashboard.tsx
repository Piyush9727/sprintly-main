import React from 'react';
import { FolderKanban, Users, MessageSquare, DollarSign } from 'lucide-react';
import SummaryCard from '../components/SummaryCard';

const Dashboard = () => {
  const summaryData = [
    { title: 'New Projects', value: 12, icon: FolderKanban, color: 'bg-blue-500' },
    { title: 'New Customers', value: 44, icon: Users, color: 'bg-green-500' },
    { title: 'Inquiries', value: 37, icon: MessageSquare, color: 'bg-yellow-500' },
    { title: 'Earnings', value: '$28,500', icon: DollarSign, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
      </div>

      <div className="space-y-6">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Project Status</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td>Website Redesign</td>
                  <td>Tech Corp</td>
                  <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>Mobile App Development</td>
                  <td>StartUp Inc</td>
                  <td><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
                  <td>30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Leave Requests</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td>John Doe</td>
                  <td>Vacation</td>
                  <td>Mar 15, 2024</td>
                  <td>Mar 20, 2024</td>
                  <td><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Pending</span></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Sick Leave</td>
                  <td>Mar 12, 2024</td>
                  <td>Mar 13, 2024</td>
                  <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;