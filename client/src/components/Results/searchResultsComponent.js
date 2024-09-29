import React from 'react';
import styles from './searchResults.module.css'

const SearchResults = ({ results, searchPerformed}) => {
  if (!searchPerformed) {
    return null; // if the search was not performed return null
  }
  return (
    <div className={styles.resultContainer}>
      {searchPerformed ? (
        results.length > 0 ? (
        <ul className={styles.resultsList}>
          {results.map(result => (
            <li key={result._id} className={styles.resultCard} >
              <div className={styles.resultContent}>
                <h3 className={styles.resultTitle}>
                  <a href = {result.url} target="_blank" rel="noreferrer" className={styles.resultLink} >
                  {result.name}
                  </a> 
                  <div>
                    <p className={styles.resultDescription}> {result.difficulty_level} </p>
                  </div>
                </h3>
                <img src={result.thumbnail_url} alt={result.title} className={styles.resultImage} />
                <p className={styles.resultDescription}> {result.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3> No results found</h3>
      )
    ) :null}
    </div>
  );
};

export default SearchResults;
