import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Users, PhoneCall, UserX, Loader } from 'lucide-react';

const data = [
  { name: 'Jan', leads: 65 },
  { name: 'Feb', leads: 59 },
  { name: 'Mar', leads: 80 },
  { name: 'Apr', leads: 81 },
  { name: 'May', leads: 56 },
  { name: 'Jun', leads: 55 },
];

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="w-12 h-12 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-600">Total Leads</h3>
              <p className="text-2xl font-bold">396</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <PhoneCall className="w-12 h-12 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-600">Contacted</h3>
              <p className="text-2xl font-bold">245</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Loader className="w-12 h-12 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-600">Pending</h3>
              <p className="text-2xl font-bold">87</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <UserX className="w-12 h-12 text-red-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-600">Not Interested</h3>
              <p className="text-2xl font-bold">64</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Lead Trends</h2>
        <BarChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="leads" fill="#3B82F6" />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;