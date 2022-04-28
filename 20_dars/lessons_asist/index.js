class Person {
    firstName
    lastName
    age
    gender
    constructor(name,surname,age,gender){
        this.firstName = name
        this.lastName = surname
        this.age = age
        this.gender = gender
    }

    validate (str){
        console.log("salom");
        return typeof str == 'string' && str.length > 7 ? str : undefined
    }

    get getFullName () {
        return this.firstName + '' + this.lastName
    }

    set setFullName(arr){
        this.firstName = this.validate(arr[0]) ? arr[0] : this.firstName
        this.lastName = this.validate(arr[0]) ? arr[1] : this.lastName
    }

    get getGender () {
        return this.gender == 1 ? 'erkak' : 'ayol'
    }
}

class Worker extends Person {
    softSkill
    hardSkill
    constructor(name, surname, age, gender, s, h) {
        super(name,surname,age,gender)
        this.softSkill = s
        this.hardSkill = h
    }

    validate (str) {
        super.validate()
        console.log('hello');
        return typeof str == 'string' && str.length > 7 ? str : undefined
    }
}
let worker = new Worker('asror', 'valiyev', 12, 1, 'devOps', 'tenis')
let person = new Person('Ali','valiyev',32,1)
Person.getGender () 
console.log(person);
console.log(worker.validate('asdasdas'));