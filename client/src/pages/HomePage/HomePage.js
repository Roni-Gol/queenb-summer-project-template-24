import React from 'react';
import styles from './Home.module.css';
import RandomDuck from '../../components/RandomDuck/RandomDuck';
import LibraryView from '../../components/LibraryView'


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Duck It</h1>
      <LibraryView />
    </div>
  );
};

export default Home;
