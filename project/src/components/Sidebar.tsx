import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  UserCheck,
  CheckSquare,
  FolderKanban,
  ChevronDown,
  Building2
} from 'lucide-react';

const Sidebar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <Building2 className="h-8 w-8 text-blue-600" />
        <h1 className="text-xl font-semibold">PMS</h1>
      </div>

      <nav className="space-y-2">
        <NavLink to="/" className="sidebar-link">
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <div>
          <button
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className="sidebar-link w-full flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <FolderKanban size={20} />
              Projects
            </div>
            <ChevronDown
              size={16}
              className={`transform transition-transform ${
                isProjectsOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isProjectsOpen && (
            <div className="ml-8 mt-2 space-y-2">
              <NavLink to="/projects" className="sidebar-link">
                All Projects
              </NavLink>
              <NavLink to="/estimates" className="sidebar-link">
                Estimates
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/employees" className="sidebar-link">
          <Users size={20} />
          Employees
        </NavLink>

        <NavLink to="/leave" className="sidebar-link">
          <Calendar size={20} />
          Leave Management
        </NavLink>

        <NavLink to="/attendance" className="sidebar-link">
          <Clock size={20} />
          Attendance
        </NavLink>

        <NavLink to="/clients" className="sidebar-link">
          <UserCheck size={20} />
          Clients
        </NavLink>

        <NavLink to="/tasks" className="sidebar-link">
          <CheckSquare size={20} />
          Tasks
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;