// string interpolation (string मध्ये own value कस टाकायचे.)

const name ="omkar";
const repoCount = 10;

// console.log(`hello my selfe ${name} and my repo count is ${repoCount}. `);

const FirstName = new String("omkar");

console.log(FirstName);
console.log(FirstName[0]);
console.log(FirstName.__proto__);
console.log(FirstName.length);
console.log(FirstName.toUpperCase());
console.log(FirstName.charAt(2));
console.log(FirstName.indexOf('r'));

const newString = FirstName.substring(0, 4)
console.log(newString);

const anotherString = FirstName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "   omkar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://omkar.com/omkar%20mane"
console.log(url.replace("%20","-"));





