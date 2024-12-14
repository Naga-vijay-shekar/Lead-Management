import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LeadList from '../pages/leads/LeadList';
import LeadDetails from '../pages/leads/LeadDetails';
import LeadManagement from '../pages/leads/LeadManagement';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/leads" element={<LeadList />} />
      <Route path="/leads/:id" element={<LeadDetails />} />
      <Route path="/manage" element={<LeadManagement />} />
    </Routes>
  );
}

export default AppRoutes;