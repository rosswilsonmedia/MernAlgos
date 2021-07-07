const numsRandom = [9,6,5,4,7,3,2,1,8];

const numsSorted = [1,2,3,4,5,6,7,8,9];

const numsRandom2 = [1, 5, 10, 32, 4, 67, 31, 9, 7, 101];

function bubbleSort(nums){
    for(let i=nums.length-1; i>1; i--){
        let is_sorted=true;
        for(let j=0; j<i; j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                is_sorted=false;
            }
        }
        if(is_sorted){
            break;
        }
    }
    return nums;
}

console.log(bubbleSort(numsRandom))