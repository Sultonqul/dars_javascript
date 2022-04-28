function func(string1, string2){
    count = 0
    let a = string1.split("").map(el => el != '*' ? el : string2[count++])
    return a.join("")
}
console.log(func('S*l*m D*n**', 'aouyo'));