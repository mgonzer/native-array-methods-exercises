// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(num=> num>10)
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(chars=>chars.length>10)
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(row=>{
    return row.some(val=>{
      return val;
    });
  });
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input;
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
