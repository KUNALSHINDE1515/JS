function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUsr(username, email, pass) {
    setUsername.call(this,username)
    
    this.email = email
    this.pass = pass
}

const chai = new createUsr('chai' ,'emai@gmaik.com', 123)

console.log(chai);