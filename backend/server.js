const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { generateResponse } = require('./model');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    try {
        const reply = await generateResponse(userMessage);
        res.json({ reply });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});