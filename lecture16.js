// ---------------------console m value degaa------------
// let input=document.querySelector('input')
// let btn=document.querySelector('button')

//  btn.addEventListener('click',()=>{
//     let movie=input.value


// fetch(`https://api.tvmaze.com/search/shows?q=${movie}`).then((res)=>{
//     return res.json()
// }).then((data)=>{
//      // console.log(data[0].show.image)
// })
//  })
// ---------------------screen pr value degaaa---------------
// let input=document.querySelector('input')
// let btn=document.querySelector('button')
// let div=document.querySelector('div')

//  btn.addEventListener('click',(e)=>{
//     let movie=input.value


// fetch(`https://api.tvmaze.com/search/shows?q=${movie}`).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     div.innerHTML=data[0].show.image.medium
//     // console.log(data[0].show.image)
// })
//  })
// -------------------------------sara data screen pr-----------------------------------------
// let input=document.querySelector('input')
// let btn=document.querySelector('button')


//  btn.addEventListener('click',(e)=>{
//     let movie=input.value


// fetch(`https://api.tvmaze.com/search/shows?q=${movie}`).then((res)=>{
//     return res.json()
// }).then((data)=>{
    
//     data.map((a)=>{
//         let div=document.createElement('div')
//         let h1=document.createElement('h1')
//         // console.log(a)
        
//         div.appendChild(h1)
//         h1.innerHTML=data
    
//     })
//     // div.innerHTML=data[0].show.image.medium
//     // console.log(data[0].show.image)
// })
//  })

// ----------------------------------------------------------------------
let input=document.querySelector('input')
let btn=document.querySelector('button')
let list=document.querySelector('#list')
 
function fetchData(movie){
    axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`)
    .then(function(response){
        manipulateDOM(response.data);
    })
}
function manipulateDOM(data){
    for(let d of data){
        if(d.show.image){
            let img=document.createElement('img');
            img.setAttribute('src',d.show.image.original);
            list.appendChild(img);
        }
    }
}
btn.addEventListener('click',function(){
    let movie=input.value;
    let data=fetchData(movie);
})
