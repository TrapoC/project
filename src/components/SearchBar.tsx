import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  fullTimeOnly: boolean;
  setFullTimeOnly: (fullTime: boolean) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  fullTimeOnly,
  setFullTimeOnly,
  onSearch
}) => {
  return (
    <div className="relative -mt-8 mb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-md shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
            {/* Search by title/company */}
            <div className="flex-1 flex items-center border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6">
              <Search className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Filter by title, companies, expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Filter by location */}
            <div className="flex-1 flex items-center border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:px-6">
              <MapPin className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Filter by location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Full Time checkbox and Search button */}
            <div className="flex items-center justify-between lg:pl-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={fullTimeOnly}
                  onChange={(e) => setFullTimeOnly(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded border-2 mr-3 flex items-center justify-center transition-colors duration-200 ${
                  fullTimeOnly 
                    ? 'bg-indigo-500 border-indigo-500' 
                    : 'border-gray-300 hover:border-indigo-400'
                }`}>
                  {fullTimeOnly && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-700 font-medium">Full Time Only</span>
              </label>
              
              <button
                onClick={onSearch}
                className="ml-4 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;