// Array.prototype.MySum = function(){
//     let sum = 0
//     for(let i = 0; i < this.length; i++){
//         sum += this[i]
//     }
//     return sum
// }
// let resault = [1,2,3,4,5,6].MySum()
// console.log(resault);

// Array.prototype.MyMap = function(callback){
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//        arr.push(callback(this[i],i))
//     }
//     return arr
// }
// let resault = [1,2,3,4,5].MyMap((el,i) => el == 1)
// console.log(resault);

// Array.prototype.myPush = function(callback){
//     this[this.length] = callback
//     return this
// }
// let w= [1,2,3]
// w.myPush(5)
// console.log(w);


// Array.prototype.myUnshift = function(calback){
//     for (let i = this.length - 1; i >= 0; i--) {
//         this[i+1] = this[i]
//     }
//     this[0] = calback
// }
// let w = [1,2,3,4]
// w.myUnshift(0)
// console.log(w);

// Array.prototype.myFilter = function(callback){
//     let num = []
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i]) > 3){
//             num.push(this[i])
//         }
//     }
//     return num
// }
// let w = [1,2,3,4,5].myFilter(el => el)
// console.log(w);


// Array.prototype.myForEach = function(callback){
//     let a = []
//     for (let i = 0; i < this.length; i++) {
//         a.push(callback(this[i]))
//     }
//     return a
// }
// let arr = [1,2,3,4,5].myForEach(el => el)
// console.log(arr);

// Array.prototype.mySum = function(){
//     let a = 0 
//     for (let i = 0; i < this.length; i++) {
//         a += this[i]
//     }
//     return a
// }
// let arr = [1,2,3,4,5].mySum()
// console.log(arr);

// Array.prototype.myPop = function(){
//     let a = []
//     for (let i = 0; i < this.length-1; i++) {
//         a.push(this[i])
//     }
//     return a
// }
// let arr = [1,2,3,4,5].myPop()
// console.log(arr);

// Array.prototype.myFisht = function(){
//     let a = []
//     for (let i = 1; i <= this.length-1; i++) {
//         a.push(this[i])
//     }
//     return a
// }
// let arr = [1,2,3,4,5].myFisht()
// console.log(arr);

// Array.prototype.mySort = function(){
//     for(let i = 1; i < this.length; i++){
//         for(let j = 0; j < i; j++){
//             if(this[i] < this[j]){
//                 let tab = this[j]
//                 this[j] = this[i]
//                 this[i] = tab
//             }
//         }
//     }
//     return this
// }
// let a = [1,23,91,4,-9,12]
// console.log(a.mySort());

// String.prototype.myTrim = function(){
//     let x = ''
//     let son1 = 0
//     let son2 = 0
//      for (let i = 0; i < this.length; i++) {
//          if(this[i] != " "){
//            son1 = i 
//            break
//          }
//      }
//      for (let j = this.length-1; j >= 0; j--) {
//        if(this[j] != " "){
//          son2 = j 
//          break
//        }
//      }
//      for (let l = son1; l <= son2; l++){
//        x += this[l]
//      }
//      return x
//    }
//    let a = " She Walks To The Be Wach "
//    console.log(a.myTrim());

// Array.prototype.myReduce = function(callback,acc){
//     let b = acc
//     for (let i = 0; i < this.length; i++) {
//       b = callback(b,this[i],i,this)
//     }
//     return b
//   }
//   let a = [1,2,3,4,5,6]
//   console.log(a.myReduce((acc,el)=>{
//     return acc + el
//   },23));

// Array.prototype.mySlice = function(callback, q){
//     let a =[]
//     for (let i = callback; i < q; i++) {
//       a.push(this[i])
//     }
//     return a
//   }
//   let a = [1,2,3,4,5,6,7,8]
//   console.log(a.mySlice(3,6));

// Array.prototype.myIncludes = function(callback){
//     for (let i = 0; i < this.length; i++) {
//       if(this[i] == callback){
//         return true
//       }
//     }
//     return false
//   }
//   let a = [1,2,3,4,5,6]
//   console.log(a.myIncludes(8));

// Array.prototype.myConcat = function(callback){
//     let a=this
//     if(typeof callback=='object') a.push(...callback)
//     else a[a.length]=callback
//     return a
//   }
//   let a = [1,2,3,4,5,6]
//   console.log(a.myConcat(1));

// Array.prototype.myConcat = function(callback){
//     for (let i = 0; i < callback.length; i++) {
//         if(callback.length > 1){
//         this[this.length] = callback[i]
//         }
//     }
//     if(typeof callback == 'number'){
//         this[this.length] = callback
//     }
//     return this
//     }
//     let a = [1,2,3,4,5,6]
//     console.log(a.myConcat(12));
// Array.prototype.myFill = function(calback,a = 0,b = this.length){
//     let s = []
//     for (let i = a; i < b; i++) {
//         s.push(calback)
//     }
//     return s
// }
// let a = [1,2,2,2,2,2,2]
// console.log(a.fill(1,3,6));

// Array.prototype.myJoin = function(calback){
//     let a = ''
//     for (let i = 0; i < this.length; i++) {
//         if(typeof calback == "string"){
//             a += this[i] + calback
//         }
//         if(typeof calback == 'number'){
//             a += this[i] + "" + calback
//         }
//     }
//     return a
// }
// let a = [1,2,3,4,5]
// console.log(a.myJoin(2));

// Array.prototype.myReverse = function(){
//     let a = []
//     for (let i = this.length-1; i >= 0; i--) {
//         a.push(this[i])
//     }
//     return a
// }
// let ab = [1,2,3,4,5]
// console.log(ab.myReverse());

// Array.prototype.myFind = function(callback){
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i])){
//             return this[i]
//         }
//     }
// }
// let a = [1,2,3,4,5]
// console.log(a.myFind(el => el == 5));