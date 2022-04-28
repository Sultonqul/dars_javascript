// class Math{
//     constructor(x,y,z) {
//         this.x = x
//         this.y = y 
//         this.z = z

//     }
//     qosh(){
//         return this.x + this.y + this.z
//     }
//     kop(){
//         return this.x * this.y  * this.z
//     }
// }
// let math = new Math(4,5,6)
// math.qosh()
// math.kop()
// console.log(math.kop());
function sum(array,colback){
    let sum = []
   for (const el of array) {
       let num = colback(el)
       sum.push(num)
   }
        return sum
    }

let array = [10, 20, 30]
let k = sum(array, function(el){
    return el*2
})
console.log(k);