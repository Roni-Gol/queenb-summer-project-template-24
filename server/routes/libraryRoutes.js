const express = require('express')


const {
    index

} = require('../controllers/libraryController')
const router = express.Router()
// GET all content
//Retrieves all content items in the database
router.get('/', index)

module.exports = router;