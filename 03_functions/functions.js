


function sayMyName(){
console.log("K");
console.log("U");
console.log("n");
console.log("a");
console.log("l");
}

// sayMyName();

// function addTwoNumbers(number1 , number2) {  //parameter
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1 , number2) {  //parameter
    // let result =  number1 + number2
    // return result

    return number1 + number2
    

}

const result = addTwoNumbers(4,8); // Arguments

// console.log("Result: ", result);



function loginUserMessage(username){
    if(username === undefined){
         console.log("Please enter a username");  
         return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kunal"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 200));

const user ={
    username: "kunal",
    prices:299
}

function handleObject(anyobject){
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"RO_KO",
    price:499
})

const myNewArray = [200, 400, 600, 100, 500]

function returnSecoundVAlue(getArray){
    return getArray[2]
}
// console.log(returnSecoundVAlue(myNewArray));
console.log(returnSecoundVAlue([200, 400, 600, 100, 500]));