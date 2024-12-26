let step1 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo Select Ho Gyi")
        }, 4000);
    })
}
let step2 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo filter Ho Gyi")
        }, 3000);
    })
}
let step3 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo Captioned Ho Gyi")
        }, 2000);
    })
}
let step4 = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Photo Post Ho Gyi")
        }, 4000);
    })
}
async function preeti(){
    let data = await step1() 
    console.log(data);
    let data1= await step2()
    console.log(data1);
   let data2= await step3()
   console.log(data2);
   let data4 = await step4()
   console.log(data4);
}
preeti()