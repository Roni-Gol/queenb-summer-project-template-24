const Content = require('../models/ContentModel');
const mongoose = require('mongoose')

// get all content
const index = async (req, res) => {
    const contents = await Content.find({}).sort({createAt: -1}) //the newest one at the top
    res.status(200).json(contents)
}

module.exports = {
    index
}