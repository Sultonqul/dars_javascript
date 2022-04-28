// let defaultCompare = (a,b) => a > b ? 1 : (a < b ? -1 :0);

// let binarySearchwiththLoops = (array, element, compare = defaultCompare) =>{
//     let left = 0;
//     let right = array.length - 1;
//     while(left <= right){
//         let middle = Math.floor((left + right) / 2)

//         let compare_result = compare(element, array[middle]);

//         if(compare_result === -1){
//             right = middle - 1;
//         }
//         else if(compare_result === 1) {
//             left = middle + 1
//         }
//         else{
//             return middle
//         }
//     }

//     return -1;
// }
// console.log(binarySearchwiththLoops([1,2,3,7], 3));


let defaultCompare = (a,b) => a > b ? 1 : (a < b ? -1 :0);

let binarySearchUsingRecursion = (array,element, compare = defaultCompare, left = 0, right = array.length - 1)=>{
   if(left > right) return -1;

   const middle =  Math.floor((left + right) / 2)

   const result_compare = compare(element, array[middle])

   return result_compare === -1 ?
   binarySearchUsingRecursion(array,element,compare,left,middle-1)
   : result_compare === 1 ?
   binarySearchUsingRecursion(array,element,compare,left,middle+1, right)
   : middle
}
console.log(binarySearchUsingRecursion([1,2,3,7], 3));
