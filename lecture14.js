// fetch('https://dummyjson.com/products').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     data.products.map((a)=>{
//         console.log(a)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })
// ------------------------------------------
// let div=document.querySelector('div')
// let img=document.querySelector('img')
// fetch('https://dummyjson.com/products').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     let h1=document.createElement('h1')
//     h1.innerText=data.products[0].title
//     img.setAttribute('src',data.products[0].images)
    
//     div.appendChild(img)
//     div.appendChild(h1)
    
 
        

// })
// .catch((err)=>{
//     console.log(err);
// })
// --------------------------------------------------------------
fetch('https://dummyjson.com/products').then((res)=>{
    return res.json();
}).then((objectdata)=>{
    console.log(objectdata[0].title);
    let objectt="";
    let derla=document.getElementById("didi");
    derla.innerText=objectt
    div.appendChild(didi)
    objectdata.map((values)=>{
       objectt+= `${values.title}`

    });
   
})
// ----------------------------------------------------------------------------------
// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
// 8666011da3ec58df446d49a5149ddb9b
// let city='bhopal'
// let APIkey='8666011da3ec58df446d49a5149ddb9b'
// fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city }&appid=${APIkey}`)