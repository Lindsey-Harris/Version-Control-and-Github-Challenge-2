const fs = require("fs");

// Load the data from a file
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

// Update the data
data.name = "John Doe";
data.age = 35;

// Save the data to the file
const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
