function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("K");
    console.log("A");
    console.log("R");
}

// sayMyName()
function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,3)

// console.log('Result', result);
function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Bhaskar'));
console.log(loginUserMessage('Bhaskar'));

