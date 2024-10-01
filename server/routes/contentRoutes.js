const express = require('express')
const router = express.Router()

const {
    deleteContent,
    updateContent,
    index,
    showRandomContent,
    getContentById,
    postContent,
    searchContent
 } = require('../controllers/contentController')

 const requireAuth = require('../middleware/requireAuth');
 router.use(requireAuth); //require auth for all routes

// GET all content
//Retrieves all content items in the database
router.get('/', index)

//GET random content
//Retrieves a random content from the database
router.get('/random', showRandomContent)

// GET a single content by ID
//Retrieves content with the provided ID
router.get('/:id', getContentById)

//POST new content
// Handles the upload of video content
router.post('/new', postContent)

// PATCH update a content item
// Updates partial details of the content with the provided ID
router.patch('/:id', updateContent)

// DELETE a content item
// Deletes content with the provided ID
router.delete('/:id', deleteContent)


// search for a new content item
router.post('/search', searchContent);

//search suggestions
router.post('/search/suggestions', (req, res) => {
    searchContent(req, res, true);
});

module.exports = router;


  