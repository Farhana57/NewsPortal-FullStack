const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected! ✅ ১০০% মার্কস নিশ্চিত!'))
    .catch(err => console.error('MongoDB Connection Error: ❌', err));

// Sample News Route (পরীক্ষা করার জন্য)
app.get('/news', (req, res) => {
    res.json([
        { id: 1, title: "আজকের ব্রেকিং নিউজ", content: "আপনার ব্যাকএন্ড সফলভাবে রান হয়েছে!" },
        { id: 2, title: "প্রযুক্তি সংবাদ", content: "ফারহানা তার প্রথম ফুল-স্ট্যাক প্রজেক্ট রেডি করছেন।" }
    ]);
});

// Root Route
app.get('/', (req, res) => {
    res.send('News Portal Server is Running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});