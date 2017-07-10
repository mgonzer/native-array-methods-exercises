function onlyEven (array) {
  return array.filter(i=>i%2==0)
};

function onlyOneWord (array) {
  return array.filter(i=>i.split(' ').length<=1)
};

function positiveRowsOnly (array) {

};

function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
