const user = {
    username: "kunal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sai"
// user.welcomeMessage()

// console.log(this);


//======================================================================================

// function chai() {
//     let username = "pranali"
//     console.log(this);
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "kunal"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "kunal"
    console.log(this);
}

// chai()

// const addThree = (num1, num2) =>{
//     return num1 + num2
// }



// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2 )

const addTwo = (num1, num2) => ({username:"kunal"})
console.log(addTwo(5,7));

// const myArray = [2,4,5,6,7,8,5,]
// myArray.forEach()

