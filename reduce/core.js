'use strict';
var input = [ 10, 15, 20, 25, 30, 35 ];
// var expected = 135
function sum (array) {
  return array.reduce(function(initialValue, element){
    return initialValue + element;
  });
}


var input1 = [[ 1, 2, 3 ],  //row
             [ 4, 5 ],
             [ 6 ]];

             //output = 720

function productAll (array) {
  // your code here
  return array.reduce(function(product, row){
    product *= row.reduce(function(prev, current){
      return prev * current;
    });
    return product;
  }, 1);
}



var cartoonsObject = [[ 'Thundercats', '80s' ], //row
             [ 'The Powerpuff Girls', '90s' ], //row
             [ 'Sealab 2021', '00s' ]]; //row


function objectify (array) {
  return array.reduce(function(newCartoonObject, cartoonArray){
    newCartoonObject[cartoonArray[0]] = cartoonArray[1];
    return newCartoonObject;
  },{});
}

console.log(objectify(cartoonsObject));

var input3  = [ 30, 48, 11, 5, 32 ];

function luckyNumbers (array) {
  return array.reduce(function(previous, current, index, array) {
    if ( index === array.length - 1){
      return previous + "and " + current;
    }
    return previous + current + ", ";
  }, "Your lucky numbers are ");
}

luckyNumbers(input3);

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
