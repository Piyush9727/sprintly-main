import React, { useState } from 'react';
import { Plus, X, GripVertical } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignee: {
    name: string;
    avatar: string;
  };
  status: 'todo' | 'inProgress' | 'completed';
  tag: {
    name: string;
    color: string;
  };
}

// Demo data for testing
const demoData: Task[] = [
  {
    id: '1',
    title: 'Design Homepage',
    description: 'Create wireframes for the new homepage design',
    dueDate: 'Mar 20',
    assignee: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces',
    },
    status: 'todo',
    tag: {
      name: 'Design',
      color: 'blue',
    },
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Integrate payment gateway API',
    dueDate: 'Mar 25',
    assignee: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces',
    },
    status: 'inProgress',
    tag: {
      name: 'Development',
      color: 'purple',
    },
  },
  {
    id: '3',
    title: 'Database Setup',
    description: 'Set up and configure database schema',
    dueDate: 'Mar 15',
    assignee: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces',
    },
    status: 'completed',
    tag: {
      name: 'Backend',
      color: 'gray',
    },
  },
  {
    id: '4',
    title: 'User Authentication',
    description: 'Implement user login and registration',
    dueDate: 'Mar 22',
    assignee: {
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=faces',
    },
    status: 'todo',
    tag: {
      name: 'Security',
      color: 'green',
    },
  },
  {
    id: '5',
    title: 'Frontend Styling',
    description: 'Apply CSS styles to the frontend components',
    dueDate: 'Mar 18',
    assignee: {
      name: 'Chris Brown',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=32&h=32&fit=crop&crop=faces',
    },
    status: 'inProgress',
    tag: {
      name: 'Design',
      color: 'blue',
    },
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(demoData); // Use demo data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    dueDate: '',
    status: 'todo',
  });

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const newTasks = Array.from(tasks);
    const [movedTask] = newTasks.filter((task) => task.status === source.droppableId).splice(source.index, 1);

    movedTask.status = destination.droppableId;

    setTasks(newTasks.filter((task) => task.id !== movedTask.id).concat(movedTask));
  };

  const handleAddTask = () => {
    if (!newTask.title) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description || '',
      dueDate: newTask.dueDate || 'No date',
      status: newTask.status as 'todo' | 'inProgress' | 'completed',
      assignee: {
        name: 'Unassigned',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces',
      },
      tag: {
        name: 'New',
        color: 'gray',
      },
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      status: 'todo',
    });
    setIsModalOpen(false);
  };

  const getColumnTasks = (status: Task['status']) => {
    return tasks.filter((task) => task.status === status);
  };

  const getBackgroundColor = (status: Task['status']) => {
    switch (status) {
      case 'todo':
        return 'bg-gray-50 border-gray-300';
      case 'inProgress':
        return 'bg-gray-50 border-gray-300';
      case 'completed':
        return 'bg-gray-50 border-gray-300';
      default:
        return 'bg-gray-50 border-gray-300';
    }
  };

  const renderColumn = (title: string, status: Task['status'], color: string) => (
    <div className={`flex flex-col ${getBackgroundColor(status)} rounded-lg border p-4`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className={`w-2 h-2 bg-${color}-400 rounded-full`}></span>
        {title} ({getColumnTasks(status).length})
      </h2>

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1"
          >
            <div className="space-y-3">
              {getColumnTasks(status).map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`group bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all ${
                        snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500 rotate-2' : ''
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            {...provided.dragHandleProps}
                            className="mt-1 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-move"
                          >
                            <GripVertical size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">{task.title}</h3>
                              <span
                                className={`px-2 py-1 bg-${task.tag.color}-100 text-${task.tag.color}-800 rounded-full text-xs`}
                              >
                                {task.tag.name}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Due: {task.dueDate}</span>
                              <img
                                src={task.assignee.avatar}
                                alt={task.assignee.name}
                                className="w-6 h-6 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderColumn('To Do', 'todo', 'yellow')}
          {renderColumn('In Progress', 'inProgress', 'blue')}
          {renderColumn('Completed', 'completed', 'green')}
        </div>
      </DragDropContext>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Task</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter task title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter task description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newTask.status}
                  onChange={(e) => setNewTask({ ...newTask, status: e.target.value as Task['status'] })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todo">To Do</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTask}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;