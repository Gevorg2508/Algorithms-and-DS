function rmElem(arr, length = 0){
    if(Array.isArray(arr)){
   if(length >= arr.length){
       return arr;
   }else{
       length = arr.length;
   }
   const [firstElem, ...array] = arr;
   return rmElem(array, length);
    }else{
        return "input right value";
    }
}
console.log(rmElem([1, 2, 3, 4, 5]))
