import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserCheck } from 'lucide-react';
import NavItem from './NavItem';

function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">LeadSync Pro</h1>
      </div>
      <nav className="mt-6">
        <NavItem to="/" icon={<LayoutDashboard />} label="Dashboard" />
        <NavItem to="/leads" icon={<Users />} label="Lead Listing" />
        <NavItem to="/manage" icon={<UserCheck />} label="Lead Management" />
      </nav>
    </div>
  );
}

export default Sidebar;