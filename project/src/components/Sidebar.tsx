import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  Briefcase,
  CheckSquare,
  FolderKanban,
  Menu,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/employees', icon: Users, label: 'Employees' },
    { path: '/leave-management', icon: Calendar, label: 'Leave Management' },
    { path: '/attendance', icon: Clock, label: 'Attendance' },
    { path: '/clients', icon: Briefcase, label: 'Clients' },
    { path: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white transition-all duration-300 ease-in-out h-screen fixed left-0 top-0 z-30 border-r border-gray-200`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {isOpen ? (
          <h1 className="text-xl font-bold">PM System</h1>
        ) : (
          <span className="text-xl font-bold">PM</span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 ${
                isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-600'
              } hover:bg-gray-50 transition-colors`
            }
          >
            <item.icon size={20} />
            {isOpen && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;