const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let index = 0;
let array = [];
function rotate(arr = undefined, n = 0) {
    if (Array.isArray(arr)) {
        if (index < Math.abs(n)) {
            if (n > 0) {
                arr.push(arr.shift());
                array = arr
                index++;
            } else if (n < 0) {
                arr.unshift(arr.pop());
                array = arr;
                index++;
            }
        } else if (n === 0) {
            index = 0;
            return "input right value!";
        } else {
            index = 0;
            return array;
        }
        return rotate(array, n);
    } else {
        return "input right value!";
    }
}
console.log(rotate(arr, -2));