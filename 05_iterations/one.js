// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is the best number");
    }
    //console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop ${j} and inner loop ${i}`);
        //console.log(i +'*' + j + '=' + i*j);
    }
    
}
let myArray = ['flash','batman','superman']
// console.log(myArray.length);
for (let i = 0; i < myArray.length; ++i) {
    const element = myArray[i];
    // console.log(element);  
}
//break and continue
// for (let i = 0; i <= 20; i++) {
//     if (i==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value is ${i}`);
    
// }
for (let i = 0; i <= 20; i++) {
    if (i==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value is ${i}`);
    
}