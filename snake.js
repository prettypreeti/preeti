


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// ctx.fillRect(0,0,50,50)

let boardHeight = 600;
let boardWidth = 1500;
let square = 50;

let snakeCells = [[0,0]];

let direction = 'right';

let gameOver = false;

let foodCell = generateRandomCell();

let score = 0;

document.addEventListener('keydown', function(event) {
  console.log(event,"rrr")
  if (event.key === 'ArrowLeft') {
    direction = 'left';
  } else if (event.key === 'ArrowDown') {
    direction = 'down';
  } else if (event.key === 'ArrowRight') {
    direction = 'right';
  } else {
    direction = 'up';
  }
})

let intervalId = setInterval(function() {
  update();
  draw();
}, 500);
[1,2,3,4,5]
function update() {
  let headX = snakeCells[snakeCells.length - 1][0];
  let headY = snakeCells[snakeCells.length - 1][1];

  let newX
  let newY
  

  if (direction === 'right') {
    newX = headX + square;
    newY = headY;

    if (newX === boardWidth) {
      gameOver = true;
    }
    
    
    
  } else if (direction === 'left') {
    newX = headX - square;
    newY = headY;

    if (newX < 0) {
      gameOver = true;
    }

  } else if (direction === 'up') {
    newX = headX;
    newY = headY - square;

    if (newY < 0) {
      gameOver = true;
    }

  }
  
   else {
    newX = headX;
    newY = headY + square;

    if (newY === boardHeight) {
      gameOver = true;
    }
  }
  

  snakeCells.push([newX, newY]);
 
  if (foodCell[0] === headX && foodCell[1] === headY) {
    foodCell = generateRandomCell();
    score += 1;
  } else {
    snakeCells.shift();
  
  }
}

function draw() {

  if (gameOver === true) {
    clearInterval(intervalId);
    ctx.fillStyle = 'red';
    ctx.font = '40px sans-serif';
    ctx.fillText('Game over', 50, 150);
    return;
  }

  ctx.clearRect(0, 0, boardWidth, boardHeight);
  for (let cell of snakeCells) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(cell[0], cell[1], square, square);
    // ctx.fillStyle = 'red';
    // ctx.strokeRect(cell[0], cell[1], square, square);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(foodCell[0], foodCell[1], square, square);
  // ctx.fillStyle = 'yellow';

  // draw score
  // ctx.fillStyle = 'white';
  ctx.font = '20px sans-serif';
  ctx.fillText(`Score: ${score}`, 50, 50);
}
// draw()

function generateRandomCell() {
  return [
    Math.round((Math.random()*(boardWidth ))/square)*square,
    Math.round((Math.random()*(boardHeight))/square)*square
  ]
}

// console.log(generateRandomCell())


















         


  // let X= Math.random()*1000
  // console.log(X)



       
           




          
           
        











 
  






     






           




                       
               

     






    


         
     
           


       









 






       


              
      






















// HTML +JS
// D   O   M
    // let h1=   document.getElementById('one')
    // h1.style.color='red'
    // console.log(h1.innerText)


//  let h1=   document.getElementsByTagName('h1')
//  for(let  item of h1){
//     item.style.color='red'
//  } 
//  console.log(h1)


//  let a= document.querySelector('a')
// let h1=   document.getElementsByClassName('one')
// console.log(a.getAttribute('href'))
// a.setAttribute('href','abccccccc')
// console.log(a.getAttribute('href'))

   
// const arr = [
//     'https://images.unsplash.com/photo-1662330287683-6032da28889c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
//     'https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
//     'https://images.unsplash.com/photo-1660899599007-771f97039eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
//     'https://images.unsplash.com/photo-1662324580989-591a589c5e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
//   ]
  
// //   const imageEl = document.querySelector('img');
  
// //   let num = 0;
  
// //   setInterval(function() {
// //     imageEl.setAttribute('src', arr[num]); 
// //     num = (num + 1) % arr.length;
// //   }, 2000);

      

   

// // let obj={
// //     id:1,
// //     user:'hello',
// //     print:function(){
// //         console.log(this.user)
// //     }
// // }
// // // obj.print()

// // console.log(obj.toString())





// // let arr=[1,2,3,4,5,6]

// // arr.map((a)=>{
// //     console.log(a)

// // })



// let obj={

// }


//        function outer(user,lastName){
//         this.userName=user,
//         this.userLastName=lastName

//        }

//      let user=  new  outer('hello', 'hiiii')
//      console.log(user)








// let arr=[1,2,3,4,5,6]

// arr.map((a)=>{

// })

     
   



// let obj={
//     id:1,
//     user:'yachnaaa hppy b',
//     print:function(){
//         console.log(this.user)
//     }
// }
// // obj.print()
// console.log(obj.toString())
//    function outer(){
//     this.userName='hello',
//     this.lastName='hiii'
//    }
//    let user=    new  outer()
//    console.log(user)



// // Select input element
// const titleEl = document.getElementById('title');
// // select list element
// const listEl = document.getElementById('list');

// // select button element
// const addButtonEl = document.getElementById('add-button');

// // adding "click" event listener on button element
// addButtonEl.addEventListener('click', function() {

//   // getting the value of the input field
//   const titleText = titleEl.value;
  
//   // creating and 'li' element and adding inner text
//   const li = document.createElement('li');
//   li.innerText = titleText;

//   // add the newly created li element to the list
//   listEl.appendChild(li);

//   // clear the input field after adding li to the list
//   titleEl.value = '';

//   // remove li when it is clicked
//   li.addEventListener('click', function() {
//     li.remove();x
//   })

// })




 let inp=  document.querySelector('input')
  let btn=    document.querySelectorAll('button')
  for(let button of btn){
    button.addEventListener('click',(e)=>{
     let text=    e.target.innerText
     if(text==='C'){
      inp.value=''
     }
     else if(text === '='){
     inp.value=   eval(inp.value)
   
     }
     else{
      inp.value+=text
     }
    //  console.log(text)

    })

  }



