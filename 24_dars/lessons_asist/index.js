// let promise = new Promise((res, rej) => {
//     setTimeout( () =>{
//         x = 100
//         if(x == 100) res('ok')
//         else rej("error")
//     },2000)
// })
// console.log(promise);
// promise.then(
//     (data) => {console.log(data);},
//     (error) => {console.log(error);}
// )


// PROMISE

// 1 - then/catch/finally
// 2 - async/await

// let qarz = 700
// let niyyat = false
// let vada = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         if(niyyat){
//             resolve('Mana rahmat $ ' + qarz)
//         }else {
//             reject('Chopildiz')
//         }
//     }, 3000)
// })
// console.log(vada)
// vada.then(
//     (data) => {console.log(data)},
//     (error) => {console.log(error)}
// )

// let x = 10
// let promise = new Promise( (res, rej) => {
//     setTimeout( () => {
//         x = 100
//         if(x == 100) res('ok')
//         else rej('error')
//     }, 2000 )
// } )
// console.log(promise)
// promise.then(
//     (data) => {console.log(data)},
//     (error) => {console.log(error)}
// )

// async function client() {
//     try {
//         let response = server()
//         console.log(response);
//         let data = await response
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }finally{
//         console.log();
//     }
// }
// server()
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  console.log(map);