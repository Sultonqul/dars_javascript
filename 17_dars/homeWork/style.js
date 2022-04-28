function divide(num1, num2, sum = 0, counter = 1){
    sum += num2
    if(num1 == sum) return counter
    else if(num1 < sum) return counter -1
    return divide(num1, num2, sum, counter+1)
}
console.log(divide(74,5))