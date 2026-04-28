// let myName ="Arpita         ";
// console.log(myName.truelength);


let myHeroes=["Thor","Spiderman"]

let heroPower={
    Thor:"Hammer",
    Spiderman:"Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
        
    }
}
Object.prototype.Hitesh=function(){
    console.log(`Hitesh is pressent in all objects`);
    
}

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says Hello`);
    
}
// heroPower.Hitesh()
// myHeroes.Hitesh()
// myHeroes.heyHitesh()
// heroPower.heyHitesh()


// inheritance
const user={
    username:"Appu",
    email:"acd@gmail.com",
}
const Teacher ={
    makeVideo: true
}
const TeachingSupport ={
    isAvailable:false
}
const TASupport ={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__=user
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ="Appu    "
String.prototype.truelength=function(){
    console.log(`${this}`); 
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.truelength()