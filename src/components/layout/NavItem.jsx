import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-6 py-3 ${
          isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
        }`
      }
    >
      <span className="w-5 h-5 mr-3">{icon}</span>
      {label}
    </NavLink>
  );
}

export default NavItem;