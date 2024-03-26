//Object Literal
const user = {
    username: "Bhaskar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this);


//Constructor Function

// const promiseOne = new Promise()//new-> constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Bhaskar", 12, true)
const userTwo = new User("Chai", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);