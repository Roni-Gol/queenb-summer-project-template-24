import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import styles from './styles/App.module.css';

import signup from './pages/signup';
import login from './pages/login';

import ItemView from './components/ItemView';
import LibraryView from './components/LibraryView';
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
            <Route path="/signup" element={<signup />} />
            <Route path="/login" element={<login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
