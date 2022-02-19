const arr = [14, [1, [[[3, []]], 1], 0]];
let index = 0;
let array = [];
function concat(arr = undefined) {
    if (Array.isArray(arr)) {
        array = arr;
        if (Array.isArray(arr[index])) {
            array = [].concat(...arr);
            index = 0;
        }

        if (index > arr.length) {
            index = 0;
            return array;
        }

        index++;
        return concat(array);
    } else {
        return "input right value!";
    }
}
console.log(concat(arr));