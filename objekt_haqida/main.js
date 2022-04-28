// function arrr(array){
//     let obj = {}
//     for (let i = 0; i < array.length; i++) {
//             obj[array[i][0]] = array[i][1] ? array[i][1] : null
//     }
//     return obj
// }
// let array = [["name","nodir"],["age","22"],["jobs","devs"],["gender"]]
// console.log(arrr(array));

// function www(array){
//     let aa = []
//     for (let i = 0; i < array.length; i++) {
//         let a = ''
//         for (let j = array[i].length-1; j >= 0; j--) {
//             a += array[i][j]
//         }
//         aa.push(a)
//     }
//     return aa
// }
// console.log(www(["olma","shaftoli","nok"]));

function mapLetters(str){
    let obj = {}
    for (const key in str) {
        if(!obj[str[key]]){
            obj[str[key]] = []
            obj[str[key]].push(+key)
        }
        else {
            obj[str[key]].push(+key)
        }
    }
    return obj
}
console.log(mapLetters('olllmaa'));