


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
console.log(loginUserMessage());