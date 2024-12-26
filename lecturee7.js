let arr=[1,2,3,4,"hello","hiii",false]
function number(arr){
    let result=[]
    for(let i of arr){
        if(typeof i==='number'){
            result.push(i)
        }
    }
    return result
}
console.log(number(arr));

function string(arr){
    let result=[]
    for(let i of arr){
        if(typeof i==='string'){
            result.push(i)
        }
    }
    return result
}
console.log(string(arr));
function boolean(arr){
    let result=[]
    for(let i of arr){
        if(typeof i==='boolean'){
            result.push(i)
        }
    }
    return result
}
console.log(boolean(arr));













