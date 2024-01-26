const fs = require('fs');

// Read the current count from the file
let pageViews = parseInt(fs.readFileSync('pageviews.txt', 'utf-8')) || 0;

// Increment the count
pageViews++;

// Write the updated count back to the file
fs.writeFileSync('pageviews.txt', pageViews.toString());

console.log(`Total Page Views: ${pageViews}`);
