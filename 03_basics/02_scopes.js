// var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Bhaskar"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Bhaskar"
    if (username === "Bhaskar"){
        const website ="youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

addOne(5)
function addOne(){
    return num +2
}

addTwo(5)
const addTwo = function addTwo(){
    return num + 2
}