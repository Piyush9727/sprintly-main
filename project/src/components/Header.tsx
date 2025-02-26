import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, LogOut, Settings, ChevronDown } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 sticky top-0 z-30">
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Notifications</h3>
                <div className="space-y-2">
                  <div className="p-2 hover:bg-gray-50 rounded">
                    <p className="text-sm">New project assigned: Website Redesign</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <div className="p-2 hover:bg-gray-50 rounded">
                    <p className="text-sm">Leave request approved</p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            title="Profile"
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
          >
            <User size={20} />
            <span>John Doe</span>
            <ChevronDown size={16} />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="py-1">
                <button className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-50">
                  <Settings size={16} />
                  <span>Account Settings</span>
                </button>
                <button className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-50 text-red-600">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;