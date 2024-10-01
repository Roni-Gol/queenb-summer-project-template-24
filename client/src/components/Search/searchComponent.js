import React, { useState } from 'react';
import axios from 'axios';
import Suggestions from '../Suggestions/suggestionsComponent';
import SearchResults from '../Results/searchResultsComponent';
import styles from './searchComponent.module.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchComponent = () => {
  const [query, setQuery] = useState(''); // saves the string that the user entered
  const [results, setResults] = useState([]); // saves the search results received from the server after the search
  const [searchPerformed, setSearchPerformed] = useState(false); // saves if the search was performed
  const [suggestions, setSuggestions] = useState([]); // saves the suggestions

  const handleSearch = async () => {
    try {
      const response = await axios.post('${API_URL}/api/content/search', { query });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setSearchPerformed(true); // update that the search was performed
    }
  };

  const handleSuggestions = async (e) => {
    const value = e.target.value
    setQuery(value);

    if (value.length === 0) {
        // reset suggestions when query is empty
        setSuggestions([]);
      } else if(value.length > 0) {
        try {
            const response = await axios.post('http://localhost:5000/api/content/search/suggestions', { query: value });
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        };
      }
    };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
  };

  const handleKeyDown  = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search for content..."
        value={query}
        onChange={handleSuggestions}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}

      />

      <FaSearch className={styles.searchIcon} onClick={handleSearch} />
      {query && <FaTimes className={styles.clearIcon} onClick={clearSearch} />}

      </div>
      <Suggestions setQuery={setQuery} suggestions={suggestions} setSuggestions={setSuggestions} />
      <SearchResults results={results} searchPerformed={searchPerformed}  />
    </div>
  );
};

export default SearchComponent;


