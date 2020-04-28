// Implement a form validation for the contact form

function validate(){
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";

    var text;
  if(fName.length < 2){
    text = "Please Enter First Name";
    error_message.innerHTML = text;
    return false;
  }
  if(lName.length < 1){
    text = "Please Enter Last Name";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 10){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}


// Using the method getElementById() returns an element object representing the ID property.
// You can use querySelector() to find the element using any selector. No ID.
// The indexOf() method returns the position of the first occurrence of a specified value in a string.








