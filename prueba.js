const xlsx = require('node-xlsx');
const fs = require('fs');

// Or var xlsx = require('node-xlsx').default;

console.log(__dirname)

// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/vegetacion.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/vegetacion.xlsx`);

console.log(workSheetsFromBuffer)