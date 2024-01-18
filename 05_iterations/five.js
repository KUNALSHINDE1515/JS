const coding = [ "js", "ruby", "py", "cpp", "java", ]

// coding.forEach( function (value){
//     console.log(value);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printME(item){
//     console.log(item);
// }

// coding.forEach(printME)


// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
    languageNAme: "javascript",
    languageFileNAme:"js"
    },
    {
     languageNAme: "python",
     languageFileNAme:"py"

    },
    {
    languageNAme: "java",
    languageFileNAme:"java"
    },

]

myCoding.forEach((item)=> {
    console.log(item.languageNAme);
})