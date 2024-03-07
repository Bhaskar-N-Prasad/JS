const myObject ={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple'
}
//for in
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')
map.set('IN','India')

// for (const key in map) {
//  console.log(key);
//  not iterable (map)
// }