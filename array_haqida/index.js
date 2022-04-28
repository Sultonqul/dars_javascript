// Array Method
// 1. foreach        13. push
// 2. map            14. pop
// 3. filter         15. unshift
// 4. reduce         16. shift
// 5. slice          17. indexof
// 6. splice         18. every
// 7. sort           19. some
// 8. concat         20. find
// 9. fill           21. findIndex
// 10. includes      22. from
// 11. join          23. isArray
// 12. reverse       24. flat

// 1 - foreach

// ------------------
// let numbers = [10,20,30,40,50]
// numbers.forEach(func)

// function func(el, i, arr) {
//     console.log('a[i] = ' + el)
// }

// ------------------
let numbers = [10,20,30,40,50]
numbers.forEach((el, i, arr) => {
    if(el > 15){
        console.log(el)
    } else {
        console.log('bay');
    }
})

// ------------------

// 2- map

// ------------------
// let number = [10, 20, 30, 40, 50]
// let num = number.map(func)

// function func(el, i, arr) {
//     return el * 2
// }
// console.log(num)

// ------------------
// let number = [10, 20, 30, 40, 50]
// let num = number.map((el, i, arr) => {
//     if(el > 23){
//         console.log(i);
//     }else {
//         console.log('jim');
//     }
// })

// ------------------
// let products = [
//     {
//         name: 'laptop',
//         price: 1000,
//         count: 5
//     },
//     { 
//         name: 'desktop',
//         price: 1500,
//         count: 2
//     },
//     {
//         name: 'phone',
//         price: 500,
//         count: 10
//     }
// ]

// let total = products.map(el => el.price * el.count)
// let total = products.map(el => ({
//     name: el.name,
//     totalValue: el.price * el.count
    
// }))
// console.log(total);
// ------------------

// 3 - filter

// ------------------
// let numbers = [10, 20, 30, 40, 50]

// let even = numbers.filter(el => {
//     if(el % 3 == 0){
//         console.log(el);
//     }
// })
// let even = numbers.filter(isEven)
// function isEven(value) {
//     return value % 2 === 0
// }
// console.log(even)

// ------------------
// let people = [
//     {
//         name: 'Samandar',
//         age: 15
//     },
//     {
//         name: 'Odil',
//         age: 19
//     },
//     {
//         name: 'Sarvar',
//         age: 21
//     }
// ]
// let sdf = people.filter(person => person.age >= 18)
// console.log(sdf);

// ------------------
// let sdf = people.filter((el, i, arr) => {
//     console.log(el);
// })

// ------------------

// let number = [ 10, 20, 30, 20, 10, 30, 30, 50, 20, 60]
// let nums = number.filter((el, i, arr) => {
    //// console.log(arr.indexOf(el));
//     return arr.indexOf(el) === i
// })
// console.log(nums);

// ------------------

// 4 - reduce

// ------------------
// let numbers = [10, 20, 30, 40, 50]
// let total = numbers.reduce(func, 0)
// function func(acc, el){
//     return acc + el
// }
// console.log(total);

// ------------------
// let store = [
//     {
//         name: 'Laptop',
//         price: 1200,
//         count: 3
//     },
//     {
//         name: 'Desktop',
//         price: 800,
//         count: 2
//     },
//     {
//         name: 'Mobile',
//         price: 1500,
//         count: 7
//     }
// ]
// let total = store.reduce(
//     (acc, el) => acc + el.price * el.count,
//     0
// )
// console.log(total);

// 5 - slice

// ------------------
// let numbers = [10, 20, 30, 40, 50]
// let num = numbers.slice(1, 3)
// console.log(numbers)
// console.log(num)


// ------------------
// let num = numbers.slice(-3)
// console.log(num)

// ------------------
// let sdf = ['Samandar', 'Odil', 'Sanjar', 'Qodir']
// let asd = sdf.slice(0, 2)
// console.log(asd)

// 6 - splice

// ------------------
// let letters = ['A', 'B', 'C', 'D', 'E']
// letters.splice(2, 2) 
// console.log(letters);

// ------------------
// let letters = ['A', 'B', 'C', 'D', 'E']
// letters.splice(-4, 2 )
// console.log(letters)

// ------------------
// let letters = ['A', 'B', 'C', 'D', 'E']
// letters.splice(2, 2, 'G')
// console.log(letters)

// 7 - sort

// ------------------
// let names = ['Samandar', 'Sanjar', 'Abdulloh', 'Bohodir']
// names.sort()
// console.log(names);

// ------------------
// let nums = [2, 56, 105, 4, 76, 43, 18]
// nums.sort((a, b) => {
//     // console.log(a + ' = ' + b);
//     return a - b
// })
// console.log(nums);

// 8 - concat

// ------------------
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let x = a.concat(b)
// console.log(x)

// ------------------
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let d = [7, 8, 9]
// let x = a.concat(b, d)
// console.log(a)
// console.log(b)
// console.log(d)
// console.log(x)

// ------------------
// let a = [1, 2, 3]
// let x = a.concat(4, 5)
// console.log(x)

// ------------------
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let x = a.concat(7, 8, b)
// console.log(x)

// 9 - fill

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// numbers.fill(0)
// console.log(numbers)

// ------------------
// let numbers = [10, 20, 30, 40, 50]
// numbers.fill(9, 1, 3)
// console.log(numbers)

// 10 - includes

// ------------------
// let names = ['Samandar', 'Odil', 'Bohodir']
// let name = names.includes('Odil')
// console.log(name)

// ------------------
// let mevalar = ['Olma', 'Banan', 'Hurmo']
// let meva = mevalar.includes('Orenge')
// if(meva){
//     console.log('Uraaaa');
// } else {
//     console.log('Apelsin opklila');
// }

// 11 - join

// ------------------
// let countries = ['Turkiya', 'Arabiston', 'Dubai']
// let res = countries.join('-----')
// console.log(res)

// 12 - reverse

// ------------------
// let numbers = [10, 20, 30, 40, 50]
// numbers.reverse()
// console.log(numbers)

// 13 - push

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// numbers.push(12, 13, 14, 15)
// console.log(numbers)

// 14 - pop

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// numbers.pop()
// console.log(numbers)

// 15 - unshift

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0, 10, -1)
// console.log(numbers)

// 16 - shift

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// numbers.shift()
// console.log(numbers)

// 17 - indexOf

// ------------------
// let names = ['Samandar', 'Odil', 'Bohodir']
// console.log(names.indexOf('Odil'))

// ------------------
// let names = ['Samandar', 'Odil', 'Bohodir']
// let i = names.indexOf('Odil')
// names[i] = 'Sobir'
// console.log(names)

// ------------------
// let names = ['Samandar', 'Odil', 'Bohodir', 'Sobir']
// let i = names.indexOf('Odil')

// if(i > -1){
//     console.log('birnma')
// } else {
//     console.log('xc nma')
// }

// 18 - every

// ------------------
// let numbers = [1, 2, 3, -4, 5]
// let num = numbers.every(func)
// function func(el, i, arr){
//     return el > 0
// }
// console.log(num);

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// let num = numbers.every(func)
// function func(el, i, arr){
//     return el > 0
// }
// console.log(num)

// ------------------
// let names = [
//     {
//         name: 'Jay'
//     },
//     {
//         name: 'Jay'
//     },
//     {
//         name: 'Jay'
//     },
//     {
//         name: 'Jay'
//     }
// ]
// let res = names.every(person => person.name == 'Jay' )
// console.log(res)

// 19 - some

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// let num = numbers.some(func)
// function func(el){
//     return el > 4
// }
// console.log(num)

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// let num = numbers.some(func)
// function func(el){
//     return el > 5
// }
// console.log(num)

// ------------------
// let persons = [
//     {
//         name: 'Samandar',
//         age: 23
//     },
//     {
//         name: 'Odil',
//         age: 21
//     },
//     {
//         name: 'Qodir',
//         age: 25
//     },
//     {
//         name: 'Sobir',
//         age: 15
//     }
// ]
// let person = persons.some(person => person.age > 24)
// console.log(person)

// 20 - find

// ------------------
// let names = ['Samandar', 'Odil', 'Qodir']
// let res = names.find(func)
// function func(el){
//     return el == 'Qodir'
// }
// console.log(res)

// ------------------
// let names = ['Samandar', 'Odil', 'Qodir']
// let res = names.find((el, i, arr) => {
//     return el == 'Odil'
// })
// console.log(res)

// ------------------
// let persons = [
//     {
//         name: 'Samandar',
//         age: 23
//     },
//     {
//         name: 'Odil',
//         age: 21
//     },
//     {
//         name: 'Qodir',
//         age: 25
//     },
//     {
//         name: 'Sobir',
//         age: 15
//     }
// ]
// let res = persons.find((el, i, arr) => {
//     return el.name == 'Sobir'
// })
// console.log(res)

// 21 - findIndex

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// let res = numbers.findIndex(func)
// function func(el){
//     return el == 3
// }
// console.log(res)

// ------------------
// let numbers = [1, 2, 3, 4, 5]
// let res = numbers.findIndex((el, i, arr) => {
//     return el == 5
// })
// console.log(res)

// 22 - from

// ------------------
// let str = '1234567'
// let res = Array.from(str)
// console.log(res)

// ------------------
// let str = '12345566'
// let res = Array.from(str, Number)
// console.log(res);

// 23 - isArray

// ------------------
// let arr = ['Samandar', 'Odil', 'Sobir']
// let str = 'Hello World'
// let number = 123
// let res = Array.isArray(arr)
// console.log(res);

// 24 - flat

// ------------------
// let arr = [1 ,2 , [1, 2,[5,[5]]]]
// let res = arr.flat(2)
// console.log(res)