const express = require('express');
const { 
    createContent,
 } = require('../controllers/contentController')

const router = express.Router()

// POST a new content item

router.post('/create', createContent);

<nav className={styles.appNav}>
  <Link to="/" className={styles.appLink}>Home</Link>
  <Link to="/library" className={styles.appLink}>Library</Link>
</nav>




import React from 'react'; // השאירי רק ייבוא אחד
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import LibraryView from './components/LibraryView';
import styles from './styles/App.module.css';

  