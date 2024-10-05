const express = require('express')
const router = express.Router()

const {
    index

} = require('../controllers/libraryController')

// GET all content
//Retrieves all content items in the database
router.get('/', index)

module.exports = router;