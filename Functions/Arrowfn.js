const user = {
    username: "Arpita", // Removed the leading spaces in the key
    price: 99,
    welcomeMessage: function() {
     
        console.log(`${this.username}, welcome here`);
        console.log(this);
        
    }
}

// user.welcomeMessage(); 
// user.username="Sam";
// user.welcomeMessage()


// console.log(this);    //o/p---{}


// this can give references only in object not in function so the output is undefined
// function chai(){
//     let username1="Heera";
//     console.log(this.username);
    
// }
// chai()


// ---------------------------------Arrow function
// ()=>{}
// const arrow=(n1,n2)=>{
//     return n1+n2
// }    
// console.log(arrow(3,4));


// const addTwo=(n1,n2)=> n1 + n2;
// console.log(addTwo(4,8));

// const addTwo=(n1,n2)=> (n1 + n2);
// console.log(addTwo(4,8));


// iife
( (name) => {
    console.log(`${name}`);

})("Arpita")