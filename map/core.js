function multiplyBy10 (array) {
   return array.map(item=>{
     return item * 10;
   })
};

function shiftRight (array) {
 return array.map((val, index, arr) => {
   return arr[index-1] || arr[arr.length-1];
 });
};

function onlyVowels (array) {
  return array.map(word=>{
    return word.replace(/[^aeiou]/gi,'');
  })
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
