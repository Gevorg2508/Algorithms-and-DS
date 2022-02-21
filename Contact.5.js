const arr = [1, [3, 4, [1, 2]], 10];
function concat(arr, array = [], index = 0) {
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
        return concat(array, array, index);
    } else {
        return "input right value!";
    }
}
console.log(concat(arr));