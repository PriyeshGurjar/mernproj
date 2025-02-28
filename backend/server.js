const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;


// Middleware - must come BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/auth', require('./routes/auth'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'MONGODB_URI=mongodb://127.0.0.1:27017/freetime')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.log('MongoDB connection error:', err);
        process.exit(1);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
