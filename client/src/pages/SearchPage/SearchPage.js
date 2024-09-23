import React from 'react';
import styles from './Search.module.css';
import SearchComponent from '../../components/Search/searchComponent';

const SearchPage = () => {
    return (
      <div className={styles.search}>
        <h1 className={styles.searchHeadline}>Search Page</h1>
        <SearchComponent />
      </div>
      
    );
  };
  
  export default SearchPage;