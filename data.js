const fs = require('fs');

// Path to your JSON file
const filePath = './output.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
