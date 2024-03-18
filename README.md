# Selivanovpetr-os

Selivanovpetr-os is a collection of interesting functions for Node.js.

## Installation

You can install FizzleKit via npm: `npm install selivanovpetr-os`

## Usage
```javascript
const fizzlekit = require('fizzlekit');

// Generate a random string
const randomString = fizzlekit.generateRandomString(10);
console.log(randomString);

// Fetch a random dog image URL
fizzlekit.fetchRandomDogImage()
  .then(url => console.log(url))
  .catch(error => console.error(error));

// Shuffle an array
const shuffledArray = fizzlekit.shuffleArray([1, 2, 3, 4, 5]);
console.log(shuffledArray);
```