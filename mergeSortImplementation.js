const arr = [2, 1, 4, 3, 6, 0, 12, 23, -1, -2, 34];
let index = 0;
let secondHalf = [];
let anotherArr = [];
function mergeImplementation(arr) {
    if(Array.isArray(arr)){
    if (arr[index] > arr[index + 1]) {
        let half = Math.ceil(arr.length / 2);
        anotherArr = arr.slice(0, half);
        secondHalf.unshift(arr.slice(half));
        index = 0;
    } else {
        index = 0;
        return mergeSort(anotherArr);
    }

    if (anotherArr.length === 1) {
        anotherArr.push(...secondHalf.shift());
        anotherArr.sort((a, b) => a - b);
    } else {
        anotherArr.push(...secondHalf.shift());
        anotherArr.sort((a, b) => a - b);
        return anotherArr;
    }

    index++;
    return mergeSort(anotherArr);
    }else{
        return "input right value";
    }
}
console.log(mergeImplementation(arr));