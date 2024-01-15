const name = "kunal" 
const repoCount = 17;

// console.log(name +repoCount + "valiue or somethings"); // outdeted syntax


// most of useful syntax in javasript and backed this is called string interpullent
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('kunal-shinde');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-2,1);
console.log(anotherString);


const L1 = "    kunal   ";
console.log(L1);
console.log(L1.trim());

const url ="https://kunal.com/kunal%20Shinde"

console.log(url.replace('%20', '_'));

console.log(url.includes('kunal'));

console.log(gameName.split('_'));
