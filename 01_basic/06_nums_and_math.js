//proper Number define करण्यासाठी method

const score1 = 400
const score2 = new Number(score1);
console.log(score2);


//one and more  Number convert into string and chacek lengeth 

const Number1 =100;

console.log(Number1.toString().length);



//how to increase zero(0) after zero

const value =9696
console.log(value.toFixed(2));

//USA money style convert into indian money style

const USA =1000000;

console.log(USA.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


