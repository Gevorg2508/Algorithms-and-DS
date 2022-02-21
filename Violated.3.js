// let index = 0;
function violated(arr, index = 0) {
    if (Array.isArray(arr)) {
        if (arr[index] > arr[index + 1]) {
            return index + 1;
        } else {
            if (index > arr.length) {
                index = 0;
                return -1;
            }
        }
        index++;
        return violated(arr, index);
    }else{
        return "input right value";
    }
}
console.log(violated([2, 12, 15, 48, 64]))