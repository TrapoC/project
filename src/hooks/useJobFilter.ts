import { useState, useMemo } from 'react';
import { Job } from '../types';

export const useJobFilter = (jobs: Job[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !locationFilter ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());
      
      const matchesType = !fullTimeOnly || job.type === 'Full Time';

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [jobs, searchTerm, locationFilter, fullTimeOnly]);

  return {
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    fullTimeOnly,
    setFullTimeOnly,
    filteredJobs
  };
};