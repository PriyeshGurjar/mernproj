const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoutes);
app.use(express.json());
app.use(cookieParser());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'MONGODB_URI=mongodb://127.0.0.1:27017/freetime')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.log('MongoDB connection error:', err);
        process.exit(1); // Exit the process with a failure code
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
