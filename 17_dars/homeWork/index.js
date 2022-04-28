function added(num1, num2, sum = 0){
 sum += num2
 if(num1 == 1) return sum
 return added(num1-1, num2, sum)
}
console.log(added(5,9));
