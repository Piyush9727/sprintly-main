import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Estimates from './pages/Estimates';
import Employees from './pages/Employees';
import Leave from './pages/Leave';
import Attendance from './pages/Attendance';
import Clients from './pages/Clients';
import Tasks from './pages/Tasks';
import Auth from './pages/Auth';

function App() {
  // Temporary auth check - replace with actual auth logic
  const isAuthenticated = true; 

  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={isAuthenticated ? <Navigate to="/" /> : <Auth />}
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
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
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;