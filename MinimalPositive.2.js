const newArr = [-5, -9, -111, -1000, -7];

let index = 0;
let array = [];
function minimal(arr, ) {
    if (arr[index] >= 0) {
        array.push(arr[index]);
    }else{
        return -1;
    }
    if (index > arr.length) {
        index = 0;
        return Math.min(...array);
    }
    index++;
    return minimal(arr);
}
console.log(minimal(newArr));


// function findMinEl(arr, minEl = Infinity) {
//     console.log(arr)
//     const newArr = [...arr]

//     if(newArr.length === 0) {
//        if (minEl === Infinity) return -1;
//        else return minEl ;  
//     }

//     const [firstElm, ...partArr] = newArr;

//     if(firstElm >= 0 && firstElm < minEl){
//         minEl = firstElm;
//     }

//     return findMinEl(partArr, minEl)

// }

// console.log(findMinEl(arr))

