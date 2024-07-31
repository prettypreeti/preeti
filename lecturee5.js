// --------------------foreach------------------------------------------------------------------
// ----------------it will give the value of array---------=>
// let arr=[1,2,3,4,5,6,6]

// arr.forEach((a,b,c)=>{
//     console.log(a)
// })


// ----------------------it will give the index value-------
// let arr=[1,2,3,4,5,6,6]

// arr.forEach((a,b,c)=>{
//     console.log(b)
// })


// --------------------it will give the array------------
// let arr=[1,2,3,4,5,6,6]

// arr.forEach((a,b,c)=>{
//     console.log(c)
// })
// --------------it  will give  undefined-----
let arr=[1,2,3,4,5,6,6]

let newA= arr.forEach((a,b,c)=>{
    return c;
})
console.log(newA);


//--------------------------------------------map-----------------------------------------
// --------in map it will return the  aarray----



// ---------there is no difference btween foreach and map just the difference is when we return the value in for each
// it will give undefined but in map it will give array-------90% both are same
// let arr=[1,2,3,4,5,6,6]

// let newA= arr.map((a,b,c)=>{
//     return c;
// })
// console.log(newA);

// -------------------------------filter--------------
// ----it will filter the values-----------
// let arr=[1,2,3,4,5,6,6]

//  let newA=arr.filter((a,b,c)=>{
//     return a>4;
// })
// console.log(newA);

// -----------------------------------sum of array--------------------------------------
// let arr=[1,2,3,4,5,6,6]
// let sum=arr.reduce((a,b,c,d)=>{
//     return a+b
// })
// console.log(sum);

// ------------------------find-----------------------------------------
// ----------find will give only one 6 it will not go more......aage nhi jataa h--------
// --------------filter check whole array but find got one value then it will not move forward---------
// let arr=[1,2,3,4,5,6,6]
// let find=arr.find((a)=>{
//     return a==6;
// })
// console.log(find);


