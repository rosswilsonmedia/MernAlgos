const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function selectionSort(nums){
    for(let j=nums.length-1; j>=0; j--){
        let max = 0;
        for(let i=1; i<j; i++){
            if(nums[i]>nums[max]){
                max=i;
            }
        }
        if(nums[max]>nums[j]){
            let temp=nums[j];
            nums[j]=nums[max];
            nums[max]=temp;
        }
    }
    return nums;
}

console.log(selectionSort(numsRandomOrder));