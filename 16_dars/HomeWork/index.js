function sum(arr, count = 0, sum1 = 0){
  if(!arr[count]) return sum1
  sum1 += arr[count]
  return sum(arr, count+1, sum1)
}
console.log(sum([1,2,3,4,5,6,7,8,9]));
