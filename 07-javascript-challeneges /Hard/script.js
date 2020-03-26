// HARD: Given the information below for Tom and Jerry.
// ● Tom - height: 9in mass: 8 lbs
// ● Jerry - height: 10cm mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// ​BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. 
// Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).


var heightTom = 9; //in
var massTom = 8; //lbs 

var heightJerry = 10; //cm
var massJerry = 45; //g

var BMITom = massTom / (heightTom * heightTom);
var BMIJerry = massJerry / (heightJerry * heightJerry);
console.log(BMITom, BMIJerry);

var jerryHigherBMI = BMIJerry > BMITom;
console.log(` Is Jerry's BMI higher than Tom's? ${jerryHigherBMI}`);























  
  
















