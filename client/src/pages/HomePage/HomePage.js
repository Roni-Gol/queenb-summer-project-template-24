import React from 'react';
import styles from './Home.module.css';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className={styles.home}>
      <header style={styles.header}>
        <h1>Welcome to FitFinder</h1>
        <p>Your Ultimate Fitness Destination</p>
      </header>

      <section style={styles.section}>
        <h2>Find the Perfect Workout Anytime, Anywhere</h2>
        <p>
          Whether you're just starting out or you're a seasoned athlete, we have a workout for you. 
          Browse thousands of videos, from beginner to advanced, designed by professional trainers to help 
          you achieve your fitness goals.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Share Your Workout</h2>
        <p>
          Have a great workout video? Share it with the community! 
          Upload your fitness routines and inspire others to reach their goals. 
          It's easy to contribute, and you might just motivate someone on their journey!
        </p>
        <Link to="/upload"><button>Upload Your Workout</button></Link>
      </section>

      <section style={styles.section}>
        <h2>Start Your Fitness Journey Today</h2>
        <p>
          With easy access to expert training videos and tailored workout plans, getting fit has never been easier. Just search, find, and sweat!
        </p>
        <button style={styles.button}>Search Workouts</button>
      </section>

    </div>
  );
};

export default Home;