// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunctionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
     // CHANGE: Pass data into callback instead of returning it directly
    if (!error) callbackFunctionToRunWhenThingsAreDone(data);
    if (error) callbackFunctionToRunWhenThingsAreDone(undefined)
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

module.exports = breedDetailsFromFile;