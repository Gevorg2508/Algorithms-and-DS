const newArr = [-5, -9, -111, -1000, -7];

// let index = 0;
// let array = [];
function minimal(arr, array = [], index = 0) {
    if (Array.isArray(arr)) {
        if (arr[index] >= 0) {
            array.push(arr[index]);
        }

        if (index > arr.length) {
            index = 0;
            if (array.length === 0) {
                return -1;
            } else {
                return Math.min(...array);
            }
        }
        index++;
        return minimal(arr, array, index);
    }else{
        return "input right value";
    }
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

