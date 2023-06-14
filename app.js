const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlFilePath = 'Toko NAURA FIBER OPTIC Online - Produk Lengkap & Harga Terbaik _ Tokopedia.html';
const outputFilePath = 'output.json';

// Load the HTML file
const html = fs.readFileSync(htmlFilePath, 'utf-8');

// Load HTML into Cheerio for easy DOM manipulation
const $ = cheerio.load(html);

// Select all the elements with class "css-1sn1xa2"
const elements = $('.css-1sn1xa2');

// Define an array to store the scraped data
const data = [];

// Loop through each element and extract the desired data
elements.each((index, element) => {
  const imgElement = $(element).find('[data-testid="imgProduct"]');
  const alt = imgElement.attr('alt');
  const src = imgElement.attr('src');
  const price = $(element).find('[data-testid="linkProductPrice"]').text().trim();

  // Move the associated image file to the "img" folder
  const imgFileName = path.basename(src);
  const imgFilePath = path.join('img', imgFileName);
  fs.copyFileSync(path.join(path.dirname(htmlFilePath), src), imgFilePath);

  // Create an object with the scraped data
  const item = {
    product_name: alt,
    product_img: imgFilePath,
    product_price: price,
  };

  // Push the item to the data array
  data.push(item);
});

// Convert data to JSON
const jsonData = JSON.stringify(data, null, 2);

// Save the JSON data to a file
fs.writeFileSync(outputFilePath, jsonData);

console.log('Scraping completed. Data saved to output.json.');
