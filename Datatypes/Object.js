// object Literals
const mySym=Symbol("key1");
let obj={
    "name":"Arpita",
    "age":22,
    [mySym]:"mykey1",
    "location": "Jaipur",
   "email":"arpita@gmail.com",
    "isLoggedIn": false,
    "lastLoginDay":['Monday','Tuesday'],

};
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["location"]);
// console.log(typeof obj[mySym]);

// Object.freeze(obj)
// obj.email="abc"
// console.log(obj.email);

// console.log(obj);

// obj.greeting =function(){
//     console.log("Hello Appu!");
    
// }
// obj.greeting2=function(){
//     console.log(`Hi ,${this.name}`);
    
// }
// console.log(obj.greeting());
// console.log(obj.greeting2());

const TinderUser ={};
TinderUser.name="Sam";
TinderUser.id="123deee3";
TinderUser.isLoggedIn= false

// console.log(TinderUser);

const regularUser ={
    email:"sbc@gmail.com",
    fullName:{
         userFullname:{
            firstName:"Hitesh",
            lastname:"Chaudhary",
         }
    }
};

// console.log(regularUser.fullName?.userFullname.firstName);

 const obj1={1:"a",2:"b"};
 const obj2={3:"c",4:"d"};
 const obj3 ={obj1 , obj2}
//  console.log(obj3);
 
 const obj4=  Object.assign({},obj1,obj2)
//  console.log(obj4);
 
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

const Course ={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
};
const{courseInstructor:instructor}=Course
// console.log(courseInstructor);
// console.log(instructor);

const numbers=[1,2,3,4,5,6,7,8,9,10]
const [a,b,...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);