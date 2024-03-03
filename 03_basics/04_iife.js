// Immediately invoked Function Expression
// to stop pollution of global scope
(function chai(){
    console.log(`DB Connected`);
})(); //=> named iife
//no semi colon error
((name)=>{
    console.log(`DB Connected 2 ${name}`);
})('Bhaskar')