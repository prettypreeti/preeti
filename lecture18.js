// let a=[1,2,3,4,5]
// let b=[6,7,8,9]
// console.log(b.concat(a));
// let arr=[1,2,3,4,5]
// let n=[6,7,8,9,...arr]
// let obj={
//     id:2,
//     lastname: 'mewara'
// }
// let std={
//     id:1,
//     name:'hehe',
//     ...obj
// }
// console.log(n);
// console.log(std);
// -------------------------------------------------------------------------------
// let array=[5,5,5,6,7,8]
// function sum(a,b,...num){
//     console.log(num);
// }
// sum(5,5,5,6,7,8)

// ------------------destructing-------------------------------
let aray=[1,2,3,4,5,6]
let[q,p,c,d,e]=aray

console.log(q);
 let obj={
    id:2,
    name:'hey'
 }
 let{id}=obj
 console.log(id)
//  console.log(obj);
// -----------------------------------------------------------------------

// import a from './lecturee18.js'
// console.log(a,"hehe");

// import user from './lecturee18.js'
// console.log(user,"hehe");

import {sum,user} from './lecturee18.js'
console.log(user);
sum(6,5)

function outer()
{
    let user='heyyo..!';
    function inner(){
        console.log(user);
    }
    return inner
}
let oi=outer()
oi()