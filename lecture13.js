// pen.fillRect(0,0,500,500); //(x,y,width,height)
let canvas=document.querySelector('canvas')
let pen=canvas.getContext('2d')
pen.fillStyle='red'
let cell=50
let scell=[[0,0]]
let direction='right'
let gameOver=false
let id=setInterval(()=>{
    draw()
    update()
},500)

document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowLeft'){
        direction='left'
    }
    else if(e.key==='ArrowUp'){
        direction='up'
    }
    else{
        direction='right'
    }
})
function draw(){
    if(gameOver){
        clearInterval(id)
        return
    }

pen.clearRect(0,0,1300,600)//it is used to clear the shape ---it will erase from these coordinates
for(let i of scell){
    pen.fillRect(i[0],i[1],cell,cell)
}
}
draw()



function update(){
    let headX=scell[scell.length-1][0]
    let headY=scell[scell.length-1][1]

    let newheadX
    let newheadY
    if(direction==='up'){
        newheadX=headX
        newheadY=headY-cell
        if(direction<0){
            gameOver=true
        }
    }
    else if(direction==='down'){
        newheadX=headX
        newheadY=headY+cell
        if(direction===600){
            gameOver=true
        }
    }
    else if(direction==='left'){
        newheadX=headX-cell
        newheadY=headY
        if(direction<1300){
            gameOver=true
        }
    }
    else{
        newheadX=headX+cell
        newheadY=headY
        if(direction===1300){
            gameOver=true
        }
    }
    scell.push([newheadX,newheadY])
    scell.shift()

    

}

