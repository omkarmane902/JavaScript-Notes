const tinderUser ={}

tinderUser.id ="9617",
tinderUser.name ="omkar",
tinderUser.isLogin="true"


// console.log(tinderUser);



//how to access nested object (complex object)
const regularUser = {
    email: "omkar@gmail.com",
    Password:9617,
    fullname: {
        userfullname: {
            firstname: "omkar",
            lastname: "mane"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

//how to tow object combine 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

const obj4={...obj1,...obj2}
// console.log(obj4);


// in object find the value 

const regularUser1 = {
    email: "omkar@gmail.com",
    Password:9617,
    fullname: {
        userfullname: {
            firstname: "omkar",
            lastname: "mane"
        }
    }
}

// console.log(Object.keys(regularUser1));



// in object find the value 

const regularUser2 = {
    email: "omkar@gmail.com",
    Password:9617,
    fullname: {
        userfullname: {
            firstname: "omkar",
            lastname: "mane"
        } 
    }
}

console.log(Object.values(regularUser2));