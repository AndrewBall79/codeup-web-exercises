
var userNum = prompt("enter an odd number between 1 and 50");
var cannotPassGo = ((userNum < 50) || (userNum.isNaN) || (userNum % 2 === 0));

for (var i = 1; i < 100; i++)

    if  (cannotPassGo) {
        prompt("enter a number between 1 and 50");
        break;
    }

