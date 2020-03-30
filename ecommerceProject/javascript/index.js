// Implement a JavaScript slider for the home page


// Slideshow
var slideInterval = 5000;
function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}
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
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();

















