const axios = require('axios');
require('dotenv').config();

// Ändern Sie dies zu einem kleineren Modell
const API_URL = "https://api-inference.huggingface.co/models/gpt2";
const API_KEY = process.env.HUGGINGFACE_API_KEY;

async function generateResponse(prompt) {
  try {
    console.log("Using API Key:", API_KEY); // Temporär zum Debuggen
    const response = await axios.post(API_URL, {
      inputs: prompt,
      parameters: {
        max_new_tokens: 50,
        temperature: 0.7,
        top_p: 0.95,
        do_sample: true,
      }
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data[0].generated_text;
  } catch (error) {
    console.error('Error calling Hugging Face API:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { generateResponse };