//const tinderUser = new Object() // this is single ton object
//console.log(tinderUser);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "kunal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"kunal",
            lastName:"shinde"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"ks@gamil.com"
    },
    {
        id:1,
        email:"ks@gamil.com"
    },
    {
        id:1,
        email:"ks@gamil.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const cousrse = {
    coursename: "js hinde",
    price: 99,
    CourseInstrucror: "hitsh sir"
}

// cousrse.CourseInstrucror
const {CourseInstrucror : kunal} = cousrse
// console.log(CourseInstrucror);

console.log(kunal);

// react concept
/*const  navbar = ({company}) => {

}
navbar(company = "hitesh")
*/

// {
//     "name" : "kuinal",
//     "cousename": "js in hindi",
//     "price": " 50000"
// }


[
    {},
    {},
    {}
]