import React from 'react';
import { getStatusColor } from '../../utils/statusColors';

function LeadStatusBadge({ status }) {
  const color = getStatusColor(status);
  
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-${color}-100 text-${color}-800`}>
      {status}
    </span>
  );
}

export default LeadStatusBadge;