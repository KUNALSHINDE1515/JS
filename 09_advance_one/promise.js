// fetch('http://sothing.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function () {
        resolve({
            username: 'kunsl',
            email:'kunalshinde7956@gmail.com'
        },1000)
    },100)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"shinde", pass: "123"})
        }else{
            reject('ERROR :Somthing went wrong')
        }
    },1000)
})

  promiseFour
  .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() => {
      console.log("The promise is either resolve or rejected");
})

const  promisefive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"javaScript", pass: "123"})
        }else{
            reject('ERROR :JS went wrong')
        }
    },1000)
});
// use 
async function consumePromisefive() {
    try{
        const respose = await promisefive
        console.log(respose);
    }catch(error){
        console.log(error);
    }
}

consumePromisefive()

// async function getAllUsers() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    return console.log(error);
})