import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from './autocompleteComponent';
import SearchResults from './searchResultsComponent';

const SearchComponent = () => {
  const [query, setQuery] = useState(''); // saves the string that the user entered
  const [results, setResults] = useState([]); // saves the search results received from the server after the search

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/content/search', { query });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <Autocomplete setQuery={setQuery} />
      <button onClick={handleSearch}>Search</button>
      <SearchResults results={results} />
    </div>
  );
};

export default SearchComponent;


