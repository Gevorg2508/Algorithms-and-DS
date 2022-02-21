// let flexValue = 0;
function sumOfDig(num, flexValue = 0) {
    if (typeof num === 'number') {
        let arr = [];
        arr.push(num);
        const value = arr.join('').split('').reduce((a, b) => +a + +b);
        flexValue = Number(value);
        if (flexValue <= 9) {
            return flexValue;
        }
        return sumOfDig(flexValue, flexValue);
    } else {
        return "input right number!";
    }
}
console.log(sumOfDig(111));