const myNums = [1,2,3]

//  const myTotal = myNums.reduce( function (acc , currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal
//  }, 0) 

const myTotal = myNums.reduce( (acc, curr) => {
    console.log(`acc : ${acc} and curr : ${curr}`);
    return acc + curr
},0)

 console.log(myTotal);


 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Py course",
        price: 999
    },
    {
        itemName: "Java course",
        price: 7999
    },
    {
        itemName: "DSA course",
        price: 9999
    },
 ]

 const priceToPAy = shoppingCart.reduce( (acc ,item) => {
    return acc + item.price
},0)

console.log(priceToPAy);