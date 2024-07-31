// ------global declaration happen in var-----
// ------we can console the value outer the block in case of var but it will not happen in case of let and const---
// {
//     var a=20
// }
// console.log(a);
// ---------if we console the variable outside the block ---it will giver error that a is not defined
// {
//     let a=20
// }
// console.log(a);

// ------call back function------------
// -------here define inner in outer---
// function outer(a){
//     console.log('hey');
//     a();
// }
// function inner(){
//     console.log('inner');
// }
// outer(inner);

// -----------synchronous and asynchronous----
// --synchronous-----js is a language which run line by line---
// ---asynchronous----which doesn't run line by line----means we have to print second line before the first line---
// ----eg of asynchronous---->
// --settimeout me time dete h jitna delay krvana ho code ko------
// {----settimeout or setinterval dono webAPI k part haiii---they are not the part of javascript}
// ----webapi is a thing in which settimeout and setinterval jese function hote h---
// -----settimeout or setinterval ---jitna tyme diya ho utna tym webapi(waiting room) me wait krenge uske baad call queue(first in first out) m jaenge
// uske badd call stack(last in first out) m jaaenge----
// console.log('two');
// setTimeout(()=>{
//     console.log('one');
// },2000)
// console.log('three');
// ---interval m jitna tym diya ho uske baad wo repeated chlta rhegaaa----
let id=setInterval(()=>{
    console.log('hehe');
},2000)
// clearInterval((id)=>{
//     for(let i=0; i<11; i++){                                                                                                                                                                            
//         console.log(id);
//     }
// })

