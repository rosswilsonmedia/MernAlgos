const nums=[9,2,3,6,5,0,1,4];


function merge(left, right){
    let result=[];
    let l=0;
    let r=0;
    const pushNum = (arr, index, result) => {
        result.push(arr[index]);
        index++;
        return index;
    }
    while(l<left.length && r<right.length){
        if(left[l]<right[r]){
            l=pushNum(left, l, result);
        } else {
            r=pushNum(right, r, result);
        }
    }
    while(r<right.length){
        r=pushNum(right, r, result);
    }
    while(l<left.length){
        l=pushNum(left, l, result);
    }
    return result;
}

function mergeSort(arr){
    //base case
    if(arr.length<2){
        return arr
    }
    //progression
    let mid=Math.floor(arr.length/2)
    let left=[];
    let right=[];
    for(let i=0; i<arr.length; i++){
        if(i<mid){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    //recursion call
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(nums));