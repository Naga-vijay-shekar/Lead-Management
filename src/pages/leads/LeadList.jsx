import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeadTable from '../../components/leads/LeadTable';
import LeadFilters from '../../components/leads/LeadFilters';
import { fetchLeads } from '../../services/leadService';

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const data = await fetchLeads();
      setLeads(data);
    } catch (error) {
      console.error('Error loading leads:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Lead Listing</h1>
      <LeadFilters onFilter={loadLeads} />
      <LeadTable 
        leads={leads} 
        loading={loading}
        onLeadClick={(id) => navigate(`/leads/${id}`)}
      />
    </div>
  );
}

export default LeadList;