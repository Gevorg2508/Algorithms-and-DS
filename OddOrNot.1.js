function oddOrNot(num, index = 0) {
  if (!isNaN(num)) {
    let number = num.toString().split("");
    if (index === number.length && number[number.length - 1] % 2 !== 0) {
      return true;
    }
    if (number[index] % 2 === 0) {
      index = 0;
      return false;
    }
    index++;
    return oddOrNot(num, index);
  }else{
    return "input right value";
  }
}
// console.log(oddOrNot(1111111111111111111111111111111111111111111111111111112n));// BigInt
// console.log(oddOrNot(1111111));
// console.log(oddOrNot(11111112));
console.log(oddOrNot(113));


