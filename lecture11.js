// let div= document.querySelector('div')
// let p= document.createElement('p')
// let h5=document.createElement('h3')
// p.innerText='hello'
// h5.innerText='heyyo!'
// div.append(h5,p)
// p.remove()
// console.log(div);
// -------------------------------------------------------------------------
// --------------first way--------------------
//  function fun1(){
//     console.log("hello")
//  }

// -----------------------------------------------2nd way------------------------
// let btn=document.querySelector('button')
// btn.onclick=function(){
//     console.log('heyyyaaa')
// }
// ----------------------------------3rd way----------------------------------
//  let btn=document.querySelector('button')
//  btn.addEventListener('click',()=>{
//     console.log('chin tapak dam dam');
//  })

// -------------------------event=----------------------
// ---------------ye console m value degaaaa---------------
// let inp= document.querySelector('input')
// inp.addEventListener('input',(e)=>{
//     // console.log('heyyy')
//     console.log(e.target.value);
// })

// ------------------ye screen pr value degaa--------------
// let div= document.querySelector('div')
// let inp= document.querySelector('input')
// inp.addEventListener('input',(e)=>{
//     // console.log(e.target.value);
//     div.innerText=e.target.value
//     // div.innerText=e.target.type

// })
// ------------------------------------------------------------------------
// ---------------------y console m jo console krvaenge wo dikhaegaaaa ------------------------

// let form=document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log('nhi dekha');

// })

// ----------------------------------y console m value degaaa-------------------

// let inp= document.querySelector('input')
// let form=document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // console.log(inp.value);

// })
// ----------------------------------------------------------
// -------screen pr dikhanaa h--------------------value ko-----
// let div=document.querySelector('div')
// let inp= document.querySelector('input')
// let form=document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     div.innerText=inp.value;
    

// })
// --------to do list bnana h-----------------------
let div=document.querySelector('div')
var li=document.createElement('li')
let form=document.querySelector('form')
let inp= document.querySelector('input')


// div.appendChild(li)
arr=[li]
div.appendChild(li)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    li.innerText=inp.value;
    

})

for(li=0; li<arr.length; li++){
    
}

// if(inp===''){
//     alert('write something')
// }
// else{
//     d
// }
