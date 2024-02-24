class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const kunal = new User("kunal");
// console.log(kunal.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iPhone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId());