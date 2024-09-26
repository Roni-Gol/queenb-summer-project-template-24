const express = require('express')
const router = express.Router()

const { 
    deleteContent,
    updateContent,
    showAllContent,
    showRandomContent,
    showContent,
    postContent,
 } = require('../controllers/contentController')

// GET all content
router.get('/', showAllContent)

//GET random content
router.get('/random', showRandomContent)

// GET a single content
router.get('/:id', showContent)

// POST a new content item
router.post('/new', postContent)

// UPDATE a content item
router.patch('/:id', updateContent) //or put??

// DELETE a content item
router.delete('/:id', deleteContent)


module.exports = router;