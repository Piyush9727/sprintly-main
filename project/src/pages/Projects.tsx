import React from 'react';
import { Plus } from 'lucide-react';

const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Website Redesign</h3>
              <p className="text-sm text-gray-500">Tech Corp</p>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Progress</p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-3/4 h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Due: Mar 30, 2024</span>
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Mobile App Development</h3>
              <p className="text-sm text-gray-500">StartUp Inc</p>
            </div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">In Progress</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Progress</p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-1/3 h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Due: Apr 15, 2024</span>
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;