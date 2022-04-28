let obj = ({
    water: '$499',
    Bread: '$40',
    TV: '$450',
    Fertilizer: '$200',
    Phone: '$394',
    Notebook: '$90',
})
function itemsPurchased(obj,money){
    let k = 0
    let arr = []
    let obj1 = Object.values(obj)
    let obj2 = Object.keys(obj)
    for (let i = 0; i < obj1.length; i++) {
        for (let j = 1; j <= obj1[i].length-1; j++) {
           if(obj1[i][j] <= money[j] && obj1[i].length == money.length){
               k++
               if(money.length-1 == k){
                   arr.push(obj2[i])
               }
           }
        } 
        if(obj1[i].length < money.length){
            arr.push(obj2[i])
        }
        k = 0  
    }
    return arr
}
console.log(itemsPurchased(obj,'$399'));