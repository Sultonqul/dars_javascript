function mergeSort (array) {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
    
}
function merge (left, right) {
    let result = [], lIndex = 0, rIndex = 0;
    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }
    return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
        }
            console.log(mergeSort([1,5,3,7,2]));