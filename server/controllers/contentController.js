const Content = require('../models/ContentModel');
const mongoose = require('mongoose')

// get all content
const index = async (req, res) => {
    const contents = await Content.find({}).sort({createAt: -1}) //the newest one at the top
    res.status(200).json(contents)
}

// get random content
const showRandomContent = async (req, res) => {
    try {
        const count = await Content.countDocuments();
        const random = Math.floor(Math.random() * count);
        const content = await Content.findOne().skip(random);
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json({mssg: 'Error fetching random content', err: error});
    }
}

// get single content
const getContentById = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such content - invalid ID"})
    }

    const content = await Content.findById(id)

    if (!content) {
        return res.status(404).json({error: "No such content"})
    }

    res.status(200).json({content})
}

// POST a new content
const postContent = async (req, res) => {
    const {name, url, workout_type, duration, difficulty_level, thumbnail_url, description} = req.body
    // Add doc to DB
    try{
        const content = await Content.create({name, url, workout_type, duration, difficulty_level, thumbnail_url, description})
        res.status(200).json(content)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a content
const deleteContent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: " No such content - invalid ID"})
    }

    const content = await Content.findOneAndDelete({_id: id})

    if(!content){
        return res.status(404).json({error: "No such content"})
    }
    res.status(200).json(content)
}

// update a content
const updateContent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: " No such content - invalid ID"})
    }

    const content = await Content.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!content){
        return res.status(404).json({error: "No such content"})
    }

    res.status(200).json(content)
}

// Search for content
const searchContent = async (req, res, isSuggestion = false) => {
    const {query} = req.body     // get the query string

    try {

        const results = await content.find({
            $or: [
                {name:{$regex: query, $options: 'i'}},
                {workout_type:{$regex: query, $options: 'i'}},
                {difficulty_level:{$regex: query, $options: 'i'}},
            ]

        }, 'name thumbnail_url description url difficulty_level'); //The fields that we will return

        res.status(200).json(results);

    } catch (err) {
        res.status(500).json({mssg: 'Error searching content', err});
    }
};

module.exports = {
    deleteContent,
    updateContent,
    index,
    showRandomContent,
    getContentById,
    postContent,
    searchContent
}