const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch books from Google Books API
router.get('/', async (req, res) => {
    const { query } = req.query;
    console.log(req);
    console.log(query);
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
        );
        res.json(response.data.items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
