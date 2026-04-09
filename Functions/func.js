// function greet(){
//     console.log("hello Appu!");
// };
// greet();

function AddTwoNo(num1,num2){
    return num1 + num2;
}
let result=AddTwoNo(2,6);
// console.log(result);

function LoginIn(username){
    if(username=== undefined){
        console.log("Please enter username!");
        return
        
    }
    return `${username} is loggedIn in to the account.`
}
let check=LoginIn("Appu")
// console.log(check);

const user={
    username:"Arpita",
    price:123,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
    
}
// handleObject(user)


//handleObject({
//     username:"Appu",
//     price:399
// })

