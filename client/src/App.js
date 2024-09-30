import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import styles from './styles/App.module.css';

<<<<<<< HEAD
import ItemView from './components/ItemView';
import LibraryView from './components/LibraryView';
=======
// pages & components
import Upload from './pages/UploadPage/UploadPage';
import Navbar from './components/Navbar';

>>>>>>> 49df72d2446741dc2e6ec08f1c523ae9ad7e07d0

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
