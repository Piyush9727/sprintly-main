import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import Employees from '../pages/Employees';
import Projects from '../pages/Projects';
import LeaveManagement from '../pages/Leave';
import Attendance from '../pages/Attendance';
import Clients from '../pages/Clients';
import Tasks from '../pages/Tasks';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/leave-management" element={<LeaveManagement />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects/*" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;