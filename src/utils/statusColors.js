export const getStatusColor = (status) => {
  const colors = {
    New: 'blue',
    Contacted: 'yellow',
    Interested: 'green',
    'Not Interested': 'red',
    Converted: 'purple',
  };
  return colors[status] || 'gray';
};