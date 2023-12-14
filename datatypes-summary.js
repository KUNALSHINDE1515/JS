//primitive datatypes

// 7 types :- String, Number , Boolearn, null, udefined ,symbol, Bigint


const score = 100;
const scoreValue = 100.3

const isLoggedIn= false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 2312456987456214n
// console.log(typeof bigNumber);

// reference(Non primitive)

// Array , object ,Function

const heros = ["shaktiman", "naagrag", "doga"]

let S1 = {
    name: "kunal",
    age:22,
}

console.log(S1);



const myFunction = function(){
    console.log("hello kunal");
}



 console.log(typeof bigNumber);
console.log(typeof myFunction);
return myFunction();