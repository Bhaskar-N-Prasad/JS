const myNums = [5,2,3,4]

// const myTotal = myNums.reduce((accumualtor=0,curval)=>{--------Takes index value
//     console.log(`ACC : ${accumualtor} and curval : ${curval}`);
//     return accumualtor+curval
// })
// const myTotal = myNums.reduce((accumualtor,curval)=>{
//     console.log(`ACC : ${accumualtor} and curval : ${curval}`);
//     return accumualtor+curval
// },0)------------ takes as initial value

// const myTotal = myNums.reduce((acc,cur)=>acc+cur,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)

console.log(priceToPay);