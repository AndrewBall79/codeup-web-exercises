"use strict";


var fruits = ["apple", "banana", "orange", "apple", "pineapple"];


function allIndexesOf(inputA, inputB) {
    console.log(inputA.indexOf(inputB), inputA.lastIndexOf(inputB))
}
allIndexesOf(fruits, "apple");


// allIndexesOf(fruits, "guava");
// allIndexesOf(fruits, "pineapple");

// console.log(removeAll(fruits, "apple"));

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];