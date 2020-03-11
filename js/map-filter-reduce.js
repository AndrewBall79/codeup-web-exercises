'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let threeOrMoreLang = users.filter(user => user.languages.length >= 3);
console.log(threeOrMoreLang);



let emailMap = users.map(user => user.email);
console.log(emailMap);



let totalYears = users.reduce((total, user) => {return total + user.yearsOfExperience}, 0) ;

console.log(totalYears);
console.log(totalYears/users.length);



let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email : currentLongest, 'j');
console.log(longestEmail);


let usersNames = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name, '');
console.log("your instructers are: " + usersNames);

