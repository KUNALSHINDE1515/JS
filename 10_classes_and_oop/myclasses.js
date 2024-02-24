

// class user {
//     constructor(username , email , pass ){
//         this.username = username
//         this.email = email
//         this.pass = pass
      
//     }

//     encryPassword(){
//         return `${this.pass}kunal`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

//  const ks = new user( "shinde" , "ks@gmail.com", 123)

//  console.log(ks.encryPassword());
//  console.log(ks.changeUsername());



 // behid the scenee 

 function User (username , email , pass ) {
        this.username = username
        this.email = email
        this.pass = pass
 }

 User.prototype.encryPassword = function(){
    return `${this.pass}kunal`
 }

 User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
 }

 const tea = new User( "tea" , "tea@gmail.com", 123)

 console.log(tea.encryPassword());
 console.log(tea.changeUsername());