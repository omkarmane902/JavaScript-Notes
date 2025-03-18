//how to call function

function  ex1(){
    console.log("omkar");
    console.log("mane");
      console.log("9617");
      
}

// ex1()

//if do not sent prametermeter then print other statement and and send parameter then print other statement

function loginuser (username){
    if( username===undefined){
 console.log("please enter you user name");
 return
    }
return `${username} is login`

}
console.log(loginuser());
