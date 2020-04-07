// HARD: Data security exercise. 
// Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. 
// The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. 
// The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need. 
// For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

//WHAT WE KNOW...
//create a object called pii.
//The object should have two properties "name" and "SSN"
//Only the 'name' proerty should be accessible and should be called through a **public function**
//SSN should not be accessible at ALL!!! no matter WHAT!! PROTECT!!!!
//use 'getName' or other methods to access data 


function clientInfo() {
    var pii = {
        name: 'Vegeta',
        ssn: '605-73-1234'
    }
    function getName() {
        console.log(pii.name);
    }
    return getName;
}

var clientData = clientInfo();
clientData();




