let btn=document.querySelector('button')
let inp=document.querySelector('input')

 btn.addEventListener('click',()=>{
    let li=document.createElement('li')
    let data=inp.value
    li.innerText=data
    // console.log('heyyo')
    ul.appendChild(li)
    inp.value=''
    li.addEventListener('click',()=>{
        li.remove()
    })
    
 })
