import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import styles from './styles/App.module.css';

// pages & components
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
            <Route path="/upload" element={<Upload />} />
            <Route path="/SearchPage" element={<SearchPage />} />
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
