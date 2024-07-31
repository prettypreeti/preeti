// let arr=[1,2,3,4,5,6,7]
// let p=arr.filter((a,b,c)=>{
//     return a>2;
//  }).filter((a)=>{
//     return a%2!=0;
//  }).reduce((a,b)=>{
//     return a+b;
//  })
//  console.log(p);
 
// ------------------------------------------------
// let dataa=  [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       "age": 28,
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "state": "CA",
//         "zip": "12345"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "email": "jane.smith@example.com",
//       "age": 32,
//       "address": {
//         "street": "456 Oak St",
//         "city": "Somewhere",
//         "state": "NY",
//         "zip": "67890"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Emily Johnson",
//       "email": "emily.johnson@example.com",
//       "age": 24,
//       "address": {
//         "street": "789 Pine St",
//         "city": "Elsewhere",
//         "state": "TX",
//         "zip": "11223"
//       }
//     }
//   ]
//   dataa.map((a)=>{
//     console.log(a.address.city);
//   })
// ------------------------------------------------------------------------
// -------it will genrate random no. between 0 t0 100
// console.log(Math.random()*100);
// --------it will remove point values
// let number=Math.random()*100
// console.log(Math.floor(number));
// let date=new Date().toLocaleDateString()
// console.log(date);
// let time=new Date().toLocaleTimeString()
// console.log(time);

let number=Math.random()*100
console.log (Math.floor(number)*50);
