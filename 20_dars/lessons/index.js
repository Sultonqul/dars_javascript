// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }
// class Student extends Person {
//     constructor(name, age, group ,level = 1, grade=5){
//         super(name, age)
//         this.level = level
//         this.grade = grade
//         this.group = group
//     }
// }
// let student = new Student("Abduhoshim", 23, 5)
// console.log(student);
// console.log(student instanceof Person);

// class Animal {
//     constructor (name,koz,dum,voice){
//         this.name = name
//         this.koz = koz
//         this.dum = dum
//         this.voice = voice
//     }
//     sounLike(){
//         return `I am ${this.name} and I sound like: ${this.voice}` 
//     }
// }
// let lion = new Animal("Lion",2, true, "Rarr")
// let cat = new Animal("Cat",2, true, "Meow")

// console.log(cat.sounLike());


class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

}
class Worker extends Person {
    constructor (name, age, group, position = "nodejs"){
        super(name, age)
        this.position = position
        this.proup = group
    }
}
let worker = new Worker("Abduhoshim",23,10)
let person = new Person("Abduhoshim", 23,)
console.log(worker);
console.log(person);
