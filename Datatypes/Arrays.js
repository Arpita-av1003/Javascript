// array
const myArr=[1,3,5,7,8];
// console.log(myArr[0]);

const Hero=["ShaktiMan","Naagraj"];
myArr.push(10);
// console.log(myArr);
myArr.pop();
 
myArr.unshift(9);
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.indexOf(9));
// console.log(myArr.includes(0));

const m1=myArr.slice(1,3);
// console.log(m1);  
// console.log(myArr);

//-------------------------------------------------------Prototype....................
let heroes=["ShaktiMan","Naagraj","Ranjo"];
let Marvel_heroes=["Superman" , "Flash","Batman"];
// Marvel_heroes.push(heroes)
// console.log(Marvel_heroes);
// console.log(Marvel_heroes[3][1]);

// let allhero=Marvel_heroes.concat(heroes);
// console.log(allhero);

const newHeroes=[...heroes,...Marvel_heroes];
// console.log(newHeroes);

let score1=100
let score2=200
let score3=300
// console.log(Array.of(score1,score2,score3));








