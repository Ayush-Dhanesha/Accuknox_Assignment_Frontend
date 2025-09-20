import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, X } from 'lucide-react';
import { updateSearchQuery } from '../store/dashboardSlice';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.dashboard.searchQuery);

  const handleSearchChange = (e) => {
    dispatch(updateSearchQuery(e.target.value));
  };

  const clearSearch = () => {
    dispatch(updateSearchQuery(''));
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search widgets across all categories..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchQuery && (
          <button 
            className="clear-search-btn"
            onClick={clearSearch}
            title="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
