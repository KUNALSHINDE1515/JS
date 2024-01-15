// this concept is clear on the google chrome campilar step by step 

function one() {
    console.log("one")
    two()
}
function two() {
     console.log("two")
    three()
}
function three() {
     console.log("three")
}

one()
two()
three()