let data=[
    {
        id:1,
        name:'rahul'
    },
    {
        id:2,
        name:'riya'
    },
    {
        id:3,
        name:'ridhi'
    }
]
// data.map((a)=>{
//     console.log(a.id);
// })
let newdata=data.filter((a,b,c)=>{

    return a.id>1;  
}
)
newdata.map((b)=>{
    console.log(b.name);
})

