//object has two type

//1) singletone (object.creact)

//2) object literals(const jsuser{})


const jsuser = {
    name:"omkar",
    age:22,
    location:"yadrav",
    Email:"omkar@google.com",
    isLogedIn:false,
    lastLogine:["monday","sunday"]
}
// console.log(jsuser["Email"]);
// console.log(jsuser["lastLogine"]);



//using symbole in object and access the value

const mySym=Symbol("key1")

const jsuser1 = {
    name:"omkar",
    age:22,
    [mySym]:"Mykey1",
    location:"yadrav",
    Email:"omkar@google.com",
    isLogedIn:false,
    lastLogine:["monday","sunday"]
}
// console.log(jsuser1[mySym]);

//how to change value in the object


const jsuser2 = {
    name:"omkar",
    age:22,
    [mySym]:"Mykey1",
    location:"yadrav",
    Email:"omkar@google.com",
    isLogedIn:false,
    lastLogine:["monday","sunday"]
}

jsuser2.Email="omkar@chatgpt.com"

console.log(jsuser2);

//how to value freeze in the object


const jsuser3 = {
    name:"omkar",
    age:22,
    [mySym]:"Mykey1",
    location:"yadrav",
    Email:"omkar@google.com",
    isLogedIn:false,
    lastLogine:["monday","sunday"]
}

jsuser3.Email="omkar@chatgpt.com"
Object.freeze(jsuser3)
jsuser3.Email="omkar@9617.com"


//object reference ghehun function tayar karani

const jsuser4 = {
    name:"omkar",
    age:22,
    [mySym]:"Mykey1",
    location:"yadrav",
    Email:"omkar@google.com",
    isLogedIn:false,
    lastLogine:["monday","sunday"]
}

jsuser4.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
 console.log(jsuser4.greeting());
 