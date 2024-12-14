import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserCheck, Settings } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">LeadSync Pro</h1>
      </div>
      <nav className="mt-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/leads"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Users className="w-5 h-5 mr-3" />
          Lead Listing
        </NavLink>
        <NavLink
          to="/manage"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <UserCheck className="w-5 h-5 mr-3" />
          Lead Management
        </NavLink>
      </nav>
    </div>
  );
}