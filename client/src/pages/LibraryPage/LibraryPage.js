import React from 'react';
import LibraryComponent from '../../components/Library/libraryComponent';
import styles from './Library.module.css';


const Library = () => {

    return (
      <div className={styles.libraryContainer}>
            <div className={styles.contents}>
                <h1 className={styles.title}>Welcome to the Library</h1>
                <LibraryComponent />
            </div>
        </div>
      
    );
  };
  
export default Library
  