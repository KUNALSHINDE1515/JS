class User {
    constructor( username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email , password){
        super(username)
        this.email =email
        this.password = password
    }

    addCourses(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai"," chai@Teacher.com",895)
chai.logMe()

const masalachai = new User("malachaoo")
masalachai.logMe();

console.log( chai === masalachai);