import React from 'react';
import styles from './searchResults.module.css'

/*const handleResultClick = (result) => {
  console.log("Result clicked: ", result); 

}*/

const SearchResults = ({ results, searchPerformed}) => {
  if (!searchPerformed || results.length === 0) {
    return null; // if there are no results return null
  }
  
  return (
    <div className={styles.resultContainer}>
      {searchPerformed ? (
        results.length > 0 ? (
        <ul className={styles.resultsList}>
          {results.map(result => (
            <li key={result._id} className={styles.resultCard} /*onClick={() => handleResultClick(result)}*/>
              <div className={styles.resultContent}>
                <h3 className={styles.resultTitle}>
                  <a href = {result.url} target="_blank" rel="noreferrer" className={styles.resultLink} >
                  {result.name}
                  </a> 
                </h3>
                <img src={result.thumbnail_url} alt={result.title} className={styles.resultImage} />
                <p className={styles.resultDescription}> {result.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No results found</h3>
      )
      ) :null}
    </div>
  );
};

export default SearchResults;
