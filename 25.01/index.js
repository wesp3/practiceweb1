// alert()
// let x = confirm(`tratratrta`)
// console.log(x)
//let x = prompt(`text`, 0)
//  let y = typeof x;
// console.log(y)

//FUNCTIONS
//regular
// function fun() {
// console.log(`fun`)
// return 1;
// }

//arrow
// const/let
// const fun1 = () => {
//     console.log(`fun1`)
// }

// console.log(fun())
// fun1()

//anonimus
// () => {
//     console.log(`fun3`)
// };

// IIFE
// ((a) => {
//     console.log(a)
// })('9')

//LOOPS
//FOR
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 7 == 0 ) {
//     console.log('boom')
//     }
//     else if (i.toString().match(/7/)){
//     console.log('boom1');
//     }
//     console.log(i);
// }

//WHILE
// let i = 0;
// while (i > 10) {
//     console.log(i)
//     if (i == 7) {
//         console.log(`boom`)
//     }
//     i++
// }

//DO-WHILE
// let i = 0;
// do {
//     console.log(i++)
// } while (i > 10);

// FOR OF
// const arr = [1, 2, 3, 4, 5, 6, 88, 2345]

// for (let item of arr) {
//     console.log(item * 2)
// }

//FOR IN
// let obj = {
//     name: "Kiril",
//     age: 32,
//     hobbie: "Photo"
// }

// for (let key in obj) {
//     // console.log(key)
//     // console.log(`text ${obj[key]}`)
//     // "text" + " " + obj[key]
//     console.log(`key ${key}, value ${obj[key]}`)
// }

// let cost = [100, 400, 300, 700];

//FOREACH + MAP
// //FOREACH
// let food = cost.forEach(i => { //מחזיר UNDEFINED
//     console.log(i)
//     return i / 2;
// })

// console.log(food)


// console.log(`------------------------`)
// //MAP
// let walk = cost.map(i => { //מחזיר מערך חדש
//     console.log(i)
//     return i / 2;
// })

// console.log(walk)