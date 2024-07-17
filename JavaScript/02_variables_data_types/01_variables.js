/*
We can declare a variable using the three types:
1.let
2.var
3.const
*/



// -----Rules for creating a variable------
/*
1.Names can contain letters, digits, underscores, and dollar signs.

2.Names must begin with a letter.

3.Names can also begin with $ and _ but can't start with the number

4.Names are case sensitive (y and Y are different variables).

5.Reserved words cannot be used as names.

6. give the variable a meaningful name that describes the behaviour oof the variable
*/


/*let $a = "Ravi";
console.log($a);*/
let _a = "Ravi";
console.log(_a);

// let 1a = 54;
// console.log(1a);  //gives error


let a = 45;
let A = 442;
console.log(a);
console.log(A);



// var a  =45;

// console.log(a);


// let b= 98;
// console.log(b);





// const pi = 3.14;
// console.log(pi);




// -------Difference between let,var and const ---------

/*
1.Variables declared inside a { } block cannot be accessed from outside the block but variable declared using var inside a {} can be accessed outside the block


2.Variables defined with var can be redeclared.but Variables defined with let and const can not be redeclared.

*/
/*
{

    var as = 60
}

console.log(as); //output:60

{

    let asx = 66;
}
console.log(asx); //output:error


{
    const bd = 44;
}

console.log(bd); //output:error
*/

// in var redeclartion is possible
/*
var a = 66;
console.log(a);
var a = "Ravindra";
console.log(a);
*/


// in let and const redeclartion is not possible if we do then gives error
/*
let a = 65;
console.log(a);
let a = "Ravi"
console.log(a);


const a = 652;
console.log(a)
const a = "Ravindra";
console.log(a)
*/

// in const we can't reassign the values only possible in var and let
/*
let a = 30;
console.log(a);
a = 10;
console.log(a);

var b = 45;
console.log(b);
b = "ravi";
console.log(b);
*/
/*
const s = "Ravi";
console.log(s);
s = 78;  //here code give error
console.log(s);
*/