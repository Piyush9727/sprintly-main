import React from 'react';
import { Plus } from 'lucide-react';

const Tasks = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            To Do
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Design Homepage</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Design</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Create wireframes for the new homepage design</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due: Mar 20</span>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces"
                  alt="Assigned to"
                  className="w-6 h-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* In Progress */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            In Progress
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">API Integration</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Development</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Integrate payment gateway API</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due: Mar 25</span>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces"
                  alt="Assigned to"
                  className="w-6 h-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Completed
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Database Setup</h3>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Backend</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Set up and configure database schema</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Completed: Mar 15</span>
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces"
                  alt="Assigned to"
                  className="w-6 h-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;