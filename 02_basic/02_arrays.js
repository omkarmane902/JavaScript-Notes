//value access karane(splice made (1,3)te (1,3)value access karate)
const Myarray7 =["omkar","abhi","ram","sham","bapu"];
const mya =Myarray7.splice(1,3)
// console.log(mya);


//add two array in one array

const newFri =["omkar","abhi","ram","sham","bapu"];
const oldFir =["rohan","ayush","sammad"];

const AllFri =[...newFri,...oldFir];

console.log(AllFri);

//mix array slove karun 1 simple array tayar karani
const mixArray = [1,2,3,[4,5,6],7,[9,10,11],12,[13,14,[15,16,17]]];
const mixNewArray =mixArray.flat(Infinity);
console.log(mixNewArray);

//declare value cha array kasa banavach

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
   