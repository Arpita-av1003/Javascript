// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     })
// })
// promiseOne.then(()=>{
//     console.log("Promise consumed");
    
// })


// new Promise ((resolve,reject)=>{
//       setTimeout(function(){
//           console.log('Async task 2 is completed');
//           resolve()
//       })
//   }).then(function(){
//     console.log("Async 2 resolved");
    
//   })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Arpita",age:22})
//     },1000)
// }).then(function(user){
//     console.log(user);
    
// })


//  


// async function consumePromiseFour(){
//     try{
//         const response = await Promisefour
//         console.log(response);
//     }catch (error){
//         console.log(error);
        
//     }
// }
// consumePromiseFour()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data);
        
//     }catch (erroe){
//         console.log("E:",error);
        
//     }

// }
// getAllUsers()

