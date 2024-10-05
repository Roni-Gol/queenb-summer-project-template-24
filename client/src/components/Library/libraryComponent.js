import React, { useEffect, useState } from 'react';
import styles from './library.module.css';


const Library = () => {
  // State to store library items fetched from the API
  const [libraryItems, setLibraryItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to handle asynchronous data fetching
  const [error, setError] = useState(null); // Error state to handle any issues during fetching

  // Fetch library items from the backend API when the component mounts
  useEffect(() => {
    const fetchLibraryItems = async () => {
      try {
        const response = await fetch('/api/library'); // Fetch data from the backend (API route should be defined)
        if (!response.ok) {
          throw new Error('Failed to fetch library items');
        }
        const data = await response.json();
        setLibraryItems(data);
      } catch (err) {
        setError(err.message); // Handle errors during fetch
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchLibraryItems();
  }, []);

  // Render loading, error, or library content
  return (
    <div className={styles.libraryContainer}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {!loading && !error && (
        <div className={styles.libraryGrid}>
          {libraryItems.length > 0 ? (
            libraryItems.map(item => (
              <div key={item._id} className={styles.libraryItem}>
                <h3 className={styles.libraryTitle}>
                  <a href={item.url} target="_blank" rel="noreferrer" className={styles.libraryLink}>
                    {item.name}
                  </a>
                </h3>
                {item.thumbnail_url && (
                  <img
                    src={item.thumbnail_url}
                    alt={item.title}
                    className={styles.libraryImage}
                  />
                )}
                <p className={styles.libraryDifficultyLevel}>{item.difficulty_level}</p>
                <p className={styles.libraryDescription}>{item.description}</p>
              </div>
            ))
          ) : (
            <h3>No items found in the library.</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Library;
