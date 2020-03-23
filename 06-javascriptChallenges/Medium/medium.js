// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither.
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

var input = prompt('I can tell if you\'re shouting or whispering. Type down Below.');

if (input === input.toUpperCase(input)) {
    console.log(' You are SHOUTING');
} else if (input === input.toLowerCase(input)) {
    console.log(' You are whispering...');
} else {
    console.log(' You are speaking normally :)');
}










