// uses of setInterval and setTimeout functions
// call back hell(very complex structure) -- All asynchronous problems,operations solved with help of this was done 
// function step1(fn){
//      setTimeout(()=>{
//         // console.log(fn); // It prints whatever is written inside arrow function
//    console.log('photo selected');
//    fn()
//      },5000)
    
// }
// function step2(fn1){
//     setTimeout(()=>{
//   console.log('filtered');
//   fn1()
//     },4000)
// }
// function step3(fn){
//     setTimeout(()=>{
//   console.log('caption added');
//   fn()
//     },3000)
// }
// function step4(){
//     setTimeout(()=>{
//   console.log('photo posted');
//     },2000)
// }
// step1(()=>{ // here sabse pahle step 1 chalega then arrow function inside step 1 will be passes to fn variable and then fn is called after step1 gets executed
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })
// Even if the time is same par chalega order wise hi step1 then step2 then step3 then step4 .Here variable anme can be changed
// Promise (very imp) -- advanced version of call back hell -- to resolve it 
let promise= new Promise((res, rej)=>{ // Creating Promise
//  res()
//  setTimeout(()=>{
//     rej()
//  })
let reason='barish'
if(reason==='barish'){
    rej('errorrr')
}
 else{
    res('resolvedd')
 }
})

//resolve written as res , reject as rej is a class .resolve means state returned will be "fulfilled", reject means promise state "rejected"
console.log(promise,"Hello");
// .then and. catch features are used for exception handling in js 
// .then is used for passing resolve message in case of promise fulfilled and .catch is used for passing error message when promise state is rejected
promise.then((a)=>{

    console.log(a);
}).catch((err)=>{
    console.log(err);
})
// solving above problem of call back hell
let step1 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo Select Ho Gyi")
        }, 4000);
    })
}
let step2 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo filter Ho Gyi")
        }, 3000);
    })
}
let step3 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo Captioned Ho Gyi")
        }, 2000);
    })
}
let step4 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo Post Ho Gyi")
        }, 4000);
    })
}
// Calling all step functions
// step1().then((data)=>{
//     console.log(data);
//     return step2().
//     then((filtereddd)=>{
//         console.log(filtereddd);
//         return step3().
//     then((caption)=>{
//         console.log(caption);
//         return step4().
//         then((post)=>{
//             console.log(post);
//         })
//     })
//     })
//     })
    // third way of solving this problem is async await
    // Async/await is a powerful feature that simplifies working with promises. Here’s how it works:

// Async Functions:
// An async function is defined using the async keyword before the function declaration.
// When you mark a function as async, it always returns a promise. 
    async function magic(){
        let data = await step1() //await is used to wait the step2
        console.log(data);
        let data1= await step2()
        console.log(data1);
       let data2= await step3()
       console.log(data2);
       let data4 = await step4()
       console.log(data4);
    }
    magic()