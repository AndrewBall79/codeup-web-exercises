'use strict';


// let goodKid = true;
// const getCake = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goodKid === true) {
//             resolve('CAKE!');
//         } else {
//             reject('No Cake!')
//         }
//
//     });
// });
// getCake.then((data) => {
//     console.log(data);
// });
//
// getCake.catch((error) => {
//     console.log(error)
// });

// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res, num);
//         });
//     };
//
// wait(1000).then(() => console.log("You\'ll see this after 1 second"));
// wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));
//
//
//
// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });


// $.ajax('https://swapi.co/api/people/1');

// fetch('https://swapi.co/api/people').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// });


//CRUD Create Read Update Display

// fetch(''), {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         userName: 'bill',
//         password: '1234'
//     })
// };


//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made
//To find the most recent commit, find the most recent public push event payload and use the first commit in the payload to find it's date.


fetch('https://api.github.com/users/AndrewBall79', {headers: {'Authorization': 'token b48c101eb866a02cdef2f9763282b3e9564e3578'}})
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        var i = users.updated_at;
        console.log(i);
    });


// -- Ex. 1

// In your data directory, create a profiles.json file with the following...

// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }

// Add an input field and submit button (you will need to prevent the default behaviour if inside a form element) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.


// -- Ex. 2


// Using the Star Wars API, log the first film a given Star Wars character's homeworld appeared in


// -- Ex. 3


// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.


// -- Ex. 4


// Create star-chars.json file in your data folder and paste in the following...


// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]


// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...


// ['Jakku', 'Tatooine', 'Tatooine']