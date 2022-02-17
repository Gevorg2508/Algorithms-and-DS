let length = 0;
function rmElem(arr){
   
   if(length >= arr.length){
       return arr;
   }else{
       length = arr.length;
   }
   const [firstElem, ...array] = arr;
   return rmElem(array);
}
console.log(rmElem([1, 2, 3, 4, 5]))
