// Implement a JavaScript slider for the home page


// Slideshow
var slideInterval = 5000;
function getFigures() {
    // In the getFigures function, retrieve all of the figure elements
// within the section element using the id of slideshow.
// Return the resulting array as the result of this function.
    return document.getElementById('carousel').getElementsByTagName('figure');
}
// Create a new function named moveForward.
// Implement the new function with the following logic:
// This function iterates over the figure elements in the section element.
// It removes the visible class from the current figure element,
// then adds the class to the next figure element.
// Once complete, it uses the setTimeout function
// to invoke itself again after a specified amount of time which is 3 seconds
function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = 'hidden';
            pointer = i;
        }
    }
    // If 1 + pointer (increase pointer regardless) = figures.length.
    // if ++ operator is used at the begining of the variable (++pointer) 
    // it will always add 1 to the variable values regardless of where its used.

    if (++pointer == figures.length) {  
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
// Create a new function named startPlayback.
// In the startPlayback function, use the setTimeout function
// to invoke the moveForward method after a specified amount of time.
// Use the slideInterval variable for the time interval.
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();

















