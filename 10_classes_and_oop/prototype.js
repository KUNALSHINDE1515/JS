// let myName = "kunal     "

// console.log(myName.truelength());


let myHeros = ['thor' , 'spiderman']

let heroPower ={
    thor: 'hamer',
    spiderman : 'slings',

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.kunal = function(){
    console.log(`kunal is presnt in all objects`);
}
// heroPower.kunal()

// myHeros.kunal()

// ----------------------> Inheritance <------------------------------------------------------------------------------------------//


const User = {
    name: "laptop",
    email:"laptpo@gmal.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'Js Assingnment',
    fullTime :true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

//---------------------------------->modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = " chaiAurCode                  "

String.prototype.trueLenfth = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLenfth()

"kunal".trueLenfth()
"iceRea".trueLenfth()