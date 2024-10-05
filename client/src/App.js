import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './styles/App.module.css';

// pages & components
import Upload from './pages/UploadPage/UploadPage';
import Navbar from './components/Navbar';

import Signup from './pages/SignupPage/signup';
import Login from './pages/LoginPage/login';
import Home from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import Library from './pages/LibraryPage/LibraryPage';

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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
