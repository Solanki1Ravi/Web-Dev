
/*
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()




 */



let arr = [1,2,3,4,5,6,"Ravi","Harry","Shantanu",'Divyam',"Bharat","Tilak","Uttapal",true];


// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr.at(13));
/*
console.log(arr.join(" - "));
console.log(arr.join(" * "));
console.log(arr.join(" and "));
console.log(arr.join(" , "));
*/
// The pop() method removes the last element from an array
// console.log(arr.pop());

// The push() method adds a new element to an array (at the end)
/*
console.log(arr.push(200));
console.log(arr.push(20));
console.log(arr);
*/


/*
==> Array shift()
    1.Shifting is equivalent to popping, but working on the first element instead of the last.

    2.The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/

// console.log(arr.shift());
// console.log(arr);


/*

==> Array unshift()

1.The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

2.The unshift() method returns the new array length.

*/

// console.log(arr.unshift("Mustang 1968"));
// console.log(arr);

/*
==> Array delete
1.Using delete() leaves undefined holes in the array.

2.Use pop() or shift() instead

*/
// console.log(arr[0]);
// delete arr[0]
// console.log(arr[0]);


/*
==> Array concat

    1.The concat() method creates a new array by merging (concatenating) existing arrays

    2.The concat() method does not change the existing arrays. It always returns a new array.

    3.The concat() method can take any number of array arguments.

*/
// const myBoys = ["Emil", "Tobias", "Linus"];

// console.log(arr.concat(myBoys));


// ----------------- flat , map and reduce-----------

/**
 * 1. The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * 
 */

const numArr = [1,2,3,[4,5,[7,8,9,[10,11,12,[13,14,15,16,[17,18,19,20]]]]]]

// console.log(numArr);
//console.log(numArr.flat());  //depth 0
//console.log(numArr.flat(2)); // depth 2
let a = numArr.flat(Infinity);
// console.log(a);


/*
==> map()

*/

// const map1 = numArr.map((x) => x * 2);
// console.log(map1);

// const map1 = numArr.flatMap((x) => x*2);
// const map1 = a.flatMap((x)=>x*2);
// console.log(map1);


/*
==> Array filter
    1.The filter() method creates a new array with array elements that pass a test.

*/

function ageFilter(arr) {
    return arr>7
    
}
let c = a.filter(ageFilter)
console.log(c);






