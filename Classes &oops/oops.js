// const user={
//     username: "Arpita",
//     loginCount:0,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`username:${this.username}`);
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isLogedIn ){
    this.username =username;
    this.loginCount=loginCount;
    this.isLogedIn=isLogedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this 
}
const userOne = new User("Appu",12,true)
const userTwo = new User("Aprajita",11,false)
console.log(userTwo);
console.log(userOne);


