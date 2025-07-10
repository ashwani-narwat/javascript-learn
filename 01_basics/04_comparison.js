console.log(2>1);// < , >= ,<=, ==, !=

console.log("2">1);
console.log("02">1);// datatype should be same.

console.log(null >0);// false
console.log(null ==0); // false
console.log(null >= 0); // true

/* The reason is that an equity check == 
    and comparsion check >,<,>=,<= works 
    differently.
    Comparsion converts null to a number, treating it as 0.
    thats why null>=0 i true and null>0 is false.
*/

/* #1-primitive datatypes: 7 types
    1- string
    2- number
    3- boolean
    4-null
    5-undefined
    6-symbol
    7- big in
#2-Non-primitive datatypes (reference)
    1- Arrays
    2-Object
    3-Functions
#3- Javascript is dynamically typed as you do not need to define datatypes 
     it is done at the run time and you can change the type also.
    *statically typed languages are c, c++, java where you need to define the dataype initially.

    */




//********************************************************************************************************

/* type of memory allocation 
    1- stack(primitive)
    2- Heap (Non-Primitive)
 */



//************************************************************************
 