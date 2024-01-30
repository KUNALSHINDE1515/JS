const user = {
    username: "kunal",
    loginCount: 8,
    signedIn: true,

    grtUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.grtUserDetails());

// console.log(this);

function User(usernane, loginCount, isLoggedIn){
    this.usernane = usernane;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`welcome${this.usernane}`);
    }

    return this
}

const userOne = new User("kunal", 12 , true)
const userTwo =  new User("chaiAur code", 11 , false)

console.log(userOne.constructor);
// console.log(userTwo);