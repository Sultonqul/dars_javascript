class Sport{
    constructor(davlati, ismi, yoshi){
        this.davlati = davlati
        this.ismi = ismi
        this.yoshi = yoshi 
    }
}
class UFC extends Sport{
    constructor(davlati, ismi, yoshi, yutugi, kamari){
        super(davlati, ismi, yoshi)
        this.yutugi = yutugi 
        this.kamari = kamari
    }
    validet(num){
        return typeof num == 'number' && num > 1 ? false : num 
    }
    get getFullName(){
        return this.davlati + " " + this.ismi
    }
    set setFullname(arr){
        this.davlati = this.validet(arr[0]) ? arr[0] : this.davlati
        this.ismi = this.validet(arr[1]) ? arr[1] : this.ismi
        this.yoshi = this.validet(arr[2]) ? this.yoshi : arr[2]
        this.yutugi = this.validet(arr[3]) ? this.yutugi : arr[3]
        this.kamari = this.validet(arr[4]) ? this.kamari : arr[4]
    }
}
let sportchi = new UFC('Rossiya', 'Habib', 30, 29, 3)
console.log(sportchi);
sportchi.setFullname = ['Uzbekistan', 'Mahmud', 32, 11, 1]
console.log(sportchi);
console.log(sportchi.getFullName);
