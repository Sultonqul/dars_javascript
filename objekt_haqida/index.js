// let obj = {
//     name: 'Abduhoshim',
//     firstname: 'Sultoiqulov',
//     age: 23                        /////Objectdan  Maccivga o'tqazadi ==>>> eitries()
// };                                 //// [['name','Abduhoshim'],['firstname','Sultonqulov'],['age',23]]
// let obj1 = Object.entries(obj)
// console.log(obj1);


// let obj = {
//     0: 'a',
//     12: 'v',                    /////['0', '12', '2']
//     2: 'e'
// }
// console.log(Object.keys(obj));


// let obj = {
//     name: 'Abduhoshim',
//     firstname: 'Sultonqulov',
//     age: 23                         ////[ 'Abduhoshim', 'Sultonqulov', 23 ]
// }
// let obj1 = Object.values(obj)
// console.log(obj1);



/*
    Objetc.keys()    => keylarini olib beradi arrayga
    Object.values()  => qiymatlarini olib beradi arrayga
    Object.entries() => objetcni arrayga o'giribberadi
    Object.assign()  => objectni kopi qiladi yengi obj ga  
*/

// let person = {
//     firstName: 'Abror',
//     lastName: 'Ismatov'
// }
// let obj = Object.assign([],person)
// obj.lastName = 'Mahmudov'
// console.log(obj)
// console.log(person);

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

/*
    read only          get
    write only         set
    read and write 
*/

// let person = {
//     firstName: 'Sobir',
//     lastName: 'Sobirov',
//     age: 23,
//     get getName () {
//         return this.lastName + ' ' + this.firstName
//     },
//     set setName (param) {
//         return this.lastName = param
//     }
// }

// person.setName = 'Qobilov'

// console.log(person.getName)


let obj = {
    name: 'Abduhoshim',
    age: 22,
    region:{
        country:{
            name: 'Gulistoi',
            name1: 'jizzax',
            maxalla: {
                nomi: "ko'kterak",
                uy: 33,
                pol: {
                    doctor: 'kimdir',
                    qonGruh: [2,3] 
                }
            }
        }
    },
    skills:{
        soft: ['developer'],
        hard: ['football', 'teiiis']
    }
}
//let  {skills: {hard:[a,b]}} = obj
let {region: {country: {maxalla: {pol: {qonGruh: [a,b]}}}}} = obj
console.log(a,b);
