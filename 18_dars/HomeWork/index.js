function mod(num1, num2){
num1 -= num2
if(num1 == num2) return 0
if(num1 < num2 && num1 > 0) return num1
return mod(num1, num2)
}
console.log(mod(15,3));
