// DOM--------document object model
// mediator dom connects html to browser
// --poori html file ko object m convert krt eh usse fir model kehte h
// document ek predefined word h js m jiska mtlb html file se h
// let btn=document.getElementById('one')
// let btn= document.getElementsByClassName('two')
// let btn=document.querySelector('#one')
// let btn=document.querySelector('.two')
// let  btn=document.querySelector('button')
// let btn=document.querySelectorAll('button')
// console.log(btn,"btnnn");
// -------------------yaha css lga rhe js m agr sare h1 m css lgana h to loop lgana pdega------
let btn=document.querySelectorAll('h1')
for(let i of btn){
    i.style.color='red'
}



