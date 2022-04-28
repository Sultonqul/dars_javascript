// let a  = -6
// let b  = 5
// let r = -1
// let q = 1
// while (r < 0){
//     r = b*q + a
//     q++
// }
// console.log(r);

// let obj = {
//     name: 'Abduhoshim'
// }
// let obj1 = Object.create(obj)
// console.log(obj1.name)

// function point(x,y){
//     let p = Object.create(point.func)
//     p.x = x
//     p.y = y
//     return p
// }
// point.func = {
//     distance(p2){
//         return Math.sqrt(((p2.x-this.x) * (p2.x-this.x)) + (p2.y-this.y)*(p2.y-this.y))
//     }
// }
// let p1 = point(2,2)
// let p2 = point(4,3)
// console.log(p1);
// console.log(p2);
// console.log(p1.distance(p2));


// function person(name, age, salary, balans){
//     let p = Object.create(person.methods)
//     p.name = name
//     p.age = age
//     p.salary = salary
//     p.hamyon_balans = balans
//     return p
// }
// person.methods = {
//     oylikOldi(){
//         this.balace += this.salary
//     },
//     qaysiYiliTugilgan(){
//         let d = new Date()
//         return d.getFullYear() - this.age
//     }
// }
// let Abduhoshim = person('Abduhoshim', 23, 1000, 0)
// console.log('Year of Birth:', Abduhoshim.qaysiYiliTugilgan());

// function person(name, age, oylik, ragbat, sum){
//     let obj = Object.create(person.around)
//     obj.name = name
//     obj.age = age
//     obj.oylik= oylik
//     obj.ragbat = ragbat
//     obj.sumM = sum

//     return obj 
// }
// person.around = {
//     oylikSum(){
//         jami_sum = this.oylik + this.ragbat
//        return jami_sum
//     },
//     qaysiYiliTugilgan(){
//         let d = new Date()
//         return d.getFullYear() - this.age
//     }
// }
// let Palonchi = person('Palonchi', 23, 200, 50, 0)
// console.log("Palonchining Bir oyligi:", Palonchi.oylikSum());

