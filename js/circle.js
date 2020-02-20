(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return Math.pow(this.radius, 2) * Math.PI;
        },
        logInfo: function (doRounding) {
            var area;
            if (doRounding) {
                area = Math.round(this.getArea());
            } else {
                area = this.getArea();
            }
                console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();



function hasEvens(num) {

    for (var i = 0; i < num.length; i++) {
        return num[i] % 2 === 0;
    }
    }

console.log(hasEvens([1, 2, 3]));
console.log(hasEvens([2, 5, 6]));
console.log(hasEvens([3, 3, 3]));
console.log(hasEvens([]));