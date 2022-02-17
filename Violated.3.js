let index = 0;
function violated(arr){
    if(arr[index] > arr[index+1]){
        return index + 1;
    }else{
        if(index > arr.length){
            index = 0;
            return -1;
        }
    }
        index++;
        return violated(arr);
}
console.log(violated([-9, -4, -4, 3, 12, 4, 5]))