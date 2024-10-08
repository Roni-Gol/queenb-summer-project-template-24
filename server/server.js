const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const contentRoutes = require('./routes/contentRoutes')
const userRoutes = require('./routes/userRoutes')
const libraryRoutes = require('./routes/libraryRoutes')

dotenv.config();

// Constants
const PORT = process.env.PORT;

// Create Express server
const app = express();

// Middleware
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/content', contentRoutes)
app.use('/api/user', userRoutes)
app.use('/api/library', libraryRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to mongoDB & listening on port', process.env.PORT)
    })
  }).catch((err) => {
    console.log(err)
  });




