// HARD: Create two buttons, one that when clicked turns the background of the body red.
// The other, when clicked, turns the body's background color white. 
// Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background.
// Create a single function that takes an input ​className​ and updates the body's classList to ONLY include that className
// Check the Assigned Weekly Challenges Repo under 10-modernjs/challenges/hard for html starter code.

////Targets the button that should switch the body color to Red.
const red = document.querySelector('.turns--red');
//Targets the button that should switch the body color to white.
const white = document.querySelector('.turns--white');
//Targets the body
const body = document.querySelector('body'); 

//clicks on the red button to turn the background red.
red.addEventListener('click', () => {
    body.style['background-color'] = 'red';
    red.style['background-color'] = 'red';
})

// //clicks on the red button to turn the background white.
white.addEventListener('click', () => {
    body.style['background-color'] = 'white';
    white.style['background-color'] = 'white';
})















