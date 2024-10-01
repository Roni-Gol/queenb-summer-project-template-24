import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import styles from './styles/App.module.css';

// pages & components
import Upload from './pages/UploadPage/UploadPage';
import Navbar from './components/Navbar';

import Signup from './pages/SignupPage/signup';
import Login from './pages/LoginPage/login';

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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
