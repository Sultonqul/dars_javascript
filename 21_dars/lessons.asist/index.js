class Athlete {
    name 
    nomer
    group 
    age
    constructor(name, nomer, group, age){
        this.name = name 
        this.nomer = nomer
        this.group = group
        this.age = age 
    }

}
class Interesting extends Athlete{
    constructor(name, nomer, group, age, sport){
        super(name, nomer, group, age)
        this.sport = sport

    }
    get getFulname(){
        return `Mening ismim ${this.name}, meni ${this.age} yoshdaman, men ${this.sport}ga qiziqaman!`
    }
    set setFullName(arr){
        this.name = arr[0]
        this.group = arr[1]
    }
}
let interesting = new Interesting('Benzema',12,'Real',27, 'fudball')
console.log(interesting.getFulname);

interesting.setFullName = ['Ronaldo','Yunited']
console.log(interesting);