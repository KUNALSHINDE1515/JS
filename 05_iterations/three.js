// for of

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello kunal"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [Key , value] of map) {
    console.log(Key  , ':-' , value);
}

const myObject = {
    'game1' : 'GTA5',
     'game2' : 'BGMI',
}

// for (const [key , value] of myObject) {
//     console.log(key  , ':-' , value);
// }

