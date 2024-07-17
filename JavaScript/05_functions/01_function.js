

/*
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).


*/

function sayHello(name) {
    return `Good Morning ${name}, Have a nice day`;
    
}

// let result = sayHello("Ravindra Singh");
// console.log(result);


function addTwoNumber(num1,num2) {
    return num1+num2;
    
}

// let sum = addTwoNumber(45,5);
// console.log("Sum is ",sum);


// ---------function with default values

function sayHello(name="Stranger") {
    return `Good Morning ${name}, Have a nice day`;
    
}

// let greet = sayHello()
// console.log(greet);


// ---------passing array as argument--------

function returnSecondValue(getArray) {
    return getArray[1];
    
}


// console.log(returnSecondValue([200,300,400,500]));
function returnSecondValue(getArray) {
    return getArray[3];
    
}
let newArr = [200,300,400,500];
// console.log(returnSecondValue(newArr));




// ------------------passing Object as Parameters---------------

const newObj = {
    username:"Ravindra singh",
    age : 22,
    salary :100000

}

function empDetails(emp) {
    return `Name ${emp.username}\nAge ${emp.age}\nSalary ${emp.salary}`
    
}

// console.log(empDetails(newObj));

// console.log(empDetails({
//     username:"Ravindra singh",
//     age : 22,
//     salary :100000}
// ));



function sumCartaPrice(...num1) {
    return num1
    
}

console.log(sumCartaPrice(123,200,400,500));