// VERY HARD: Create a simple calculator that prompts the user for a number, 
// an operator (either +, -, * or /) and another number, 
// and then uses the functions created in the hard challenge to output the value in sentence form. 
// Example output: "3 + 4 = 7"

// 3 different prompts 
// 4 different operators 
// function that spits out "3 + 4 = 7"


function calculator(){
    var input1 = prompt ('Add your first number.');
    var input2 = prompt ('Add your operator (+, -, *, /).');
    var input3 = prompt ('Add your last number.');

    if(input2 === '+'){
        console.log(`${input1} ${input2} ${input3} = ${add(input1, input3)}`); 
    }
    if(input2 === '-'){
        console.log(`${input1} ${input2} ${input3} = ${subtract(input1, input3)}`); 
    }
    if(input2 === '*'){
        console.log(`${input1} ${input2} ${input3} = ${multiply(input1, input3)}`); 
    }
    if(input2 === '/'){
        console.log(`${input1} ${input2} ${input3} = ${divide(input1, input3)}`); 
    }
}

// math functions
function add(num1, num2){ 
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2){
    return parseInt(num1) / parseInt(num2);
}



// parseint turns string into a number.




























