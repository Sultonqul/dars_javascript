function f1(){
    return 9
}
function f2(){
    return 5
}
function f3(){
    return 1
}
function f4(){
    return 7
}

function sortt(...func){
    for (let i = 0; i < func.length; i++) {
        for (let j = i+1; j < func.length; j++) {
            if(func[i]() > func[j]()){
                let tab = func[j]
                func[j] = func[i]
                func[i] = tab
            }
        }
}
return func
}
console.log(sortt(f1,f2,f3,f4));