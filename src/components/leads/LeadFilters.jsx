import React, { useState } from 'react';

function LeadFilters({ onFilter }) {
  const [filters, setFilters] = useState({
    status: '',
    source: '',
    dateRange: 'all'
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 flex gap-4">
      <select
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
        className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option value="">All Status</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Interested">Interested</option>
        <option value="Not Interested">Not Interested</option>
        <option value="Converted">Converted</option>
      </select>

      <select
        name="source"
        value={filters.source}
        onChange={handleFilterChange}
        className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option value="">All Sources</option>
        <option value="Website">Website</option>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
        <option value="Google">Google</option>
        <option value="Offline">Offline</option>
      </select>

      <select
        name="dateRange"
        value={filters.dateRange}
        onChange={handleFilterChange}
        className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option value="all">All Time</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </div>
  );
}

export default LeadFilters;