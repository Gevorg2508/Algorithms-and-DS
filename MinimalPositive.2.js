let newArr = [45, -9, 15, 5, -78];

let index = 0;
let array = [];
function minimal(arr) {
    if (arr[index] >= 0) {
        array.push(arr[index]);
    }
    if (index > arr.length) {
        index = 0;
        return array.sort((a,b) => a-b)[0];
    }
    index++;
    return minimal(arr);
}
console.log(minimal(newArr));
