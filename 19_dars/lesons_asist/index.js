// let obj = {
//   name: 'Abduhoshim',
//   tema: {
//        f1: function sum(a){
//         return a+a
//         },
//        f2: function count(a){
//            return a*a
//        },
//        f3: function ayirma(a){
//           return a-a
//        },
//        f4: function bolinma(a){
//           return a/a
//        }
//   }
// }
// let {tema: {f1,f2,f3,f4}} = obj

// console.log(f1(4));
// console.log(f2(4));
// console.log(f3(4));
// console.log(f4(4));


// function foreacch(arr){
//     arr.forEach(function(el,ind,arr){
//        arr[ind] = el+1 
//    })
//    console.log(arr);
// }
// console.log(foreacch([1,2,3,4,5]));


// let str = "12345"

// let res = Array.from(str)
// console.log(res);

// let a = [1,2,3,4,5]
// let b = a.reduce((acc,el) => acc * el,1)
// console.log(b);

// let a = [1,2,3,4,5,6]
// let b = a.every(x => x >1)
// console.log(b);

// let a = [1,2,3,4,5,6]
// let b = a.some(x => x >1)
// console.log(b);

// let a = [1,2,3,4,5]
// let b = a.join(" ").split(" ")
// console.log(b);


// let obj = {
//     name: 'Abduhoshim',
//     firstName: "Sultonqulov",
//     age: 23,
//     oila: {
//         oilanumber: 5,
//         father: 'Mardonqul',
//         mather: "Mahfuza",
//         brather: 'Abduvosit',
//         brather: 'Asqarali'
//     },
//     around: {
//         study: {
//             manzil: "Bayovut",
//             guldu: 'Sirtqi',
//             kurs: 3,
//             guruh: 113
//         },
//         lessons: {
//            dasturlash: '3 soat',
//            js: '5 soat',
//            nodejs: "O'tilmagan"
//         },
//     }

// }
// let {around: {lessons: {js}}} = obj
// console.log(js);
