import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const getLogoColor = (logo: string): string => {
  const colors = {
    'S': 'bg-orange-500',
    'B': 'bg-red-500',
    'V': 'bg-gray-800',
    'O': 'bg-blue-600',
    'P': 'bg-teal-500',
    'C': 'bg-red-600',
    'M': 'bg-green-500',
    'T': 'bg-orange-600'
  };
  return colors[logo as keyof typeof colors] || 'bg-indigo-500';
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer group">
      {/* Company Logo */}
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-lg ${getLogoColor(job.logo)} flex items-center justify-center text-white font-bold text-lg mr-4`}>
          {job.logo}
        </div>
        <div className="text-sm text-gray-500">
          <span>{job.postedTime}</span>
          <span className="mx-2">•</span>
          <span>{job.type}</span>
        </div>
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
        {job.title}
      </h3>

      {/* Company Name */}
      <p className="text-gray-600 mb-6">
        {job.company}
      </p>

      {/* Location */}
      <div className="mt-auto">
        <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
          {job.location}
        </span>
      </div>
    </div>
  );
};

export default JobCard;