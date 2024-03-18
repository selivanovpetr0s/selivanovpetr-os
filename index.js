// Import dependencies
const _ = require('lodash');
const axios = require('axios');

// Function to generate a random string
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to fetch a random dog image URL
async function fetchRandomDogImage() {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch random dog image');
  }
}

// Function to shuffle an array
function shuffleArray(array) {
  return _.shuffle(array);
}

module.exports = {
  generateRandomString,
  fetchRandomDogImage,
  shuffleArray
};
