// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running" var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


function exercise(exerciseType) {
    // functional programing 
    return function() {
        /////////
        return "Today's exercise: " + exerciseType;
    };
}
var run = exercise("running");
console.log(run());

// exercise()
var swim = exercise("swimming");
console.log(swim());

