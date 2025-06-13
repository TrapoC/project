import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobGrid from './components/JobGrid';
import LoadMoreButton from './components/LoadMoreButton';
import { jobsData } from './data/jobs';
import { useJobFilter } from './hooks/useJobFilter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayedJobs, setDisplayedJobs] = useState(6);
  const [loading, setLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    fullTimeOnly,
    setFullTimeOnly,
    filteredJobs
  } = useJobFilter(jobsData);

  const jobsToShow = filteredJobs.slice(0, displayedJobs);
  const hasMoreJobs = displayedJobs < filteredJobs.length;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = () => {
    setSearchActive(true);
    setDisplayedJobs(6);
    // Add a small delay to show loading state
    setTimeout(() => {
      setSearchActive(false);
    }, 300);
  };

  const loadMore = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayedJobs(prev => prev + 6);
      setLoading(false);
    }, 500);
  };

  // Reset displayed jobs when filters change
  useEffect(() => {
    setDisplayedJobs(6);
  }, [searchTerm, locationFilter, fullTimeOnly]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-700' : 'bg-gray-50'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        fullTimeOnly={fullTimeOnly}
        setFullTimeOnly={setFullTimeOnly}
        onSearch={handleSearch}
      />

      <JobGrid jobs={jobsToShow} loading={searchActive} />

      {hasMoreJobs && !searchActive && (
        <LoadMoreButton onClick={loadMore} loading={loading} />
      )}
    </div>
  );
}

export default App;