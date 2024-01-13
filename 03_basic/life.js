// Immediately Invoked Function Exxpressions (IIFE)

(function chai() {
    console.log(`DB CONNECTION`);
})();

( (name) => {
    console.log(`DB connected two  ${name}`);
} )('kunal')

