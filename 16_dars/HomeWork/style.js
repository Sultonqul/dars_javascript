function advancedSort(arr){
a = arr.sort(function(a,b){return a-b})
let b = []
let k = 0
while(a.length != 0){
    for (let i = 0; i < a.length; i++) {
        if(a[i] === a[i+1]){
            k++
            continue
        }
        else{
            b.push(a.splice(0,k+1))
            k = 0
        }
    }
}
return b
}
console.log(advancedSort([2,3,2,44,2,77,77,77,45,3]));