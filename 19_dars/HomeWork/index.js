function paskal(rowIndex){
    let rows = [1]
    for (let i = 0; i < rowIndex; i++) {
       for (let j = i; j > 0; j--){
           rows[j] = rows[j] + rows[j-1]
       }
       rows.push(1)
    }
    return rows
}
console.log(paskal(3));