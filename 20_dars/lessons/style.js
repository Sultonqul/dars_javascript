// class Car {
//     constructor(carName,color){
//         this.carName = carName
//         this.color = color
//     }
//     box() {
//         return `Menga ${this.carName}, ${this.color} ranglisi yoqadi`
//     }
// }
// class BigCar extends Car {
//     constructor(carName,color,wight,height){
//         super(carName,color)
//         this.wight = wight
//         this.height = height
//     }
//     box() {
//         return `Menga ${this.carName}, ${this.color} ranglisi yoqadi`
//     }
// }
// let bigcar = new BigCar('Malibu','qizil',200,50)
// let car = new Car('Malibu','qizil')
// console.log(car.box());
// console.log(car instanceof Car);

class Compyuter{
    name
    manitor
    menyu
    printer
    constructor(name,manitor,menyu,printer) {
        this.name = name
        this.manitor = manitor 
        this.menyu = menyu 
        this.printer = printer
    }
}
class Phone extends Compyuter {
    constructor(name,manitor,menyu,printer,glof,naushnik){
        super(name,manitor,menyu,printer)
        this.glof = glof
        this.naushnik = naushnik 
    }
    set setMenyu(arr){
        this.name = arr[0] != 'yoq' ? arr[0] : 'boshqa ol'
        this.manitor = arr[1] != 'yoq' ? arr[1] : 'boshqa ol'
        this.menyu = arr[2] != 'yoq' ? arr[2] : 'boshqa ol'
        this.printer = arr[3] != 'yoq' ? arr[3] : 'boshqa ol'
        this.glof = arr[4] != 'yoq' ? arr[4] : 'boshqa ol'
        this.naushnik = arr[5] != 'yoq' ? arr[5] : 'boshqa ol'

    }
}
let phone = new Phone('RedmeNod9','yoq','12xc','yoq','Lacoste','oq')
phone.setMenyu = ['RedmeNod9','yoq','12xc','yoq','Lacoste','oq']
console.log(phone);
