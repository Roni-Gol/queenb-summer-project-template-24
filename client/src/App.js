import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './styles/App.module.css';
import SearchComponent from './components/searchComponent';

// pages & components
import Home from './pages/HomePage/HomePage';
import Upload from './pages/UploadPage/UploadPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar/>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
