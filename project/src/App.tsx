import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Estimates from './pages/Estimates';
import Employees from './pages/Employees';
import Leave from './pages/Leave';
import Attendance from './pages/Attendance';
import Clients from './pages/Clients';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;