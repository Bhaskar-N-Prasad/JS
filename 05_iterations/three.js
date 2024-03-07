// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - same as objects the difference is objects can have duplicate 
//values but maps cannot have and map remebers the order in which key 
//value pairs are inserted

const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')
map.set('IN','India')

// console.log(map);

for (const [key,value] of map) { //destructered array
    // console.log(key,':-',value);
    
}

const myObject ={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);//error not iterable using forof
// }