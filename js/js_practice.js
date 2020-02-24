"use strict";


// var i = 2;
// while (i <= 65536){
//     // console.log(i);
//     i *= 2;
// }


// function showMultTable(input) {
//     for (var i = 1; i <= 10; i++) {
//         // console.log("7 x " + i + " = " + input * i )
//     }
// }
// showMultTable(7);


// for (var i = 0; i < 10; i++) {
// var random = Math.floor(Math.random() * 180) + 20;
//     if (random % 2 === 0){
//         console.log(random + " is even");
//     }
//     else{
//         console.log(random + " is odd")
//     }
// }
//
// for (var i = 1; i < 10; i++){
// // console.log(i.toString(10).repeat(i));
// }
//
// for (i = 100; i > 0 ; i-=5){
// console.log(i);
// }


// function whatever(input) {
//         if(input == 1 ){
//             return true
//         }
//         else{
//             console.log("doi")
//         }
//     }
// whatever(8);


// for (var i = 0; i < 100000; i++) {
//     var input = parseFloat(prompt("Enter an odd number between 1 and 50"));
//     if (input > 0 && input <= 50 && input % 2 === 1 && input !== !NaN) {
//         console.log("Number to skip is: " + input);
//         break;
//     }
// }
// for (var i = 1; i < 50; i += 2) {
//     if (input === i) {
//         console.log("Yikes Skipping Number: " + input);
//         continue;
//     }
//     console.log("Here Is An Odd Number: " + i);
// }




// var allCones = Math.floor(Math.random() * 50) + 50;
//     var cones = (allCones - soldCones);
//
//     console.log("I have: "+ allCones + " to sell Today ");
// do {
//     if (cones < soldCones){
//         console.log("I can't sell you " + soldCones + " I only have " + cones + " left" )
//     }
// var soldCones = Math.floor(Math.random() * 5) + 1;
//     console.log(soldCones + " cones sold...");
//     console.log("I have "+ (cones - soldCones) + " left");
//
// } while (cones > 0);



// 1. What is an array in Javascript?
//     2. What is an object in Javascript?
//     3. What is the difference between an array and an object?
//     4. What is a property? A method?
//     5. Why are loops useful when dealing with arrays?
//     6. What is an index?
//     7. What is the difference between dot and bracket notation?
//     ## Practice Problems
// 1. Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     ```js
//     filterNumbers(["fred", true, 5, 3]) //[3, 5]
//   ```
//

function filterNumbers(array){
    var bucket = [];
    var arraySort = array.sort((a, b) => a - b);
    arraySort.forEach(function(number) {
        if (!isNaN(parseFloat(number))){
            bucket.push(number)
        }
    });
    return bucket;
}
console.log(filterNumbers(["tspeed", false, 9, 10, 7, 40, 5, 3]));


// function filterNumbers(array) {
//     array.splice("", "boolean");
//     return array.sort((a, b) => a - b);
// }
// console.log(filterNumbers(["tspeed", false, 9, 10, 7, 40, true,  5, 3]));


// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.


var dogs =  [
    {
       name: "Chompers",
       breed: "Pug",
       age: 7
     },
     {
       name: "Freddy",
       breed: "Lab",
       age: 4
     },
     {
       name: "Mr. Pig",
       breed: "Mastif",
       age: 10
     }
   ];
function getOlder(arr) {
    arr.forEach(function (dog) {
        return(dog.age += 1);
    });
    console.log(dogs);
}
getOlder(dogs);
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];
function washCars(arr) {
    arr.forEach(function (car) {
        return (car.isDirty = false)
    });
    console.log(cars)
}
washCars(cars);
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//     ```js
     //Example Input: 
var users = [
       {
         isAdmin: true,
         email: 'user1@email.com'
       },
       {
         isAdmin: true,
         email: 'user2@email.com'
       },
       {
         isAdmin: false,
         email: 'user3@email.com'
       }
     ];

// function adminList(arr) {
//     var bucket = [];
//     arr.forEach(function (user ) {
//         if (user.isAdmin === true) {
//             bucket.push(user)
//         }
//     });
//     console.log(bucket)
// }
// adminList(users);
function adminList(arr) {
    var bucket = [];
    arr.forEach(function (user ) {
        if (user.isAdmin === true) {
            bucket.push(user.email)
        }
    });
    console.log(bucket)
}
adminList(users);


// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

    //   Example Input:



     var breads = [
       "white",
       "wheat",
       "rhy",
       "white"
     ];
     
     var fillings = [
       "pb&j",
       "ham",
       "cheese steak",
       "tuna"
     ];
     function makeSandwichObjects(input1, input2) {

     }

     makeSandwichObjects(breads, fillings);

    // // Example Output:
    //   [
    //    {
    //      bread: "white",
    //      filling: "pb&j"
    //    },
    //    {
    //      bread: "wheat",
    //      filling: "ham"
    //    },
    //    {
    //      bread: "rhy",
    //      filling: "cheese steak"
    //    },
    //    {
    //      bread: "white",
    //      filling: "tuna"
    //    }
    //  ]

