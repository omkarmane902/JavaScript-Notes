//in arrays how to value access
const Myarray =["omkar","abhi","ram","sham","bapu"];
// console.log(Myarray[2]);


// value push in array

const Myarray1 =["omkar","abhi","ram","sham","bapu"];

Myarray1.push("sai");
// console.log(Myarray1);


//remove value of arrays (by defalt remove last value)

const Myarray2 =["omkar","abhi","ram","sham","bapu"];
Myarray2.pop()
// console.log(Myarray2);

//remove and addd in left side
const Myarray3 =["omkar","abhi","ram","sham","bapu"];
//add in left side
Myarray3.unshift("xyz")

//remove in left side
const Myarray4 =["omkar","abhi","ram","sham","bapu"];
Myarray4.shift()
// console.log(Myarray4)

//check the this value are present are not (true/false)
const Myarray5 =["omkar","abhi","ram","sham","bapu"];
// console.log(Myarray5.includes("ram"));

//value access karane(slice made (1,3)te (1,2)value access karate)
const Myarray6 =["omkar","abhi","ram","sham","bapu"];
const myA =Myarray6.slice(1,3);
// console.log(Myarray6);
// console.log("1", myA)


