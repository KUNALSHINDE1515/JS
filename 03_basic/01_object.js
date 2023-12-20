// sinhleton

// object literrals
const mySym = Symbol("key1")

const JsUser = {
    name: "kunal",
    ahe:18,
    [mySym]: "mykey1",
    location:"pune",
    email:"kunal shinde",
    isLoggedIn: false   ,
    lastLoginDays: ["Monday", "saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);


JsUser.email ="kunalAchatgpt.com"
Object.freeze(JsUser)
JsUser.email ="shshshs"
