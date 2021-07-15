/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
    let i=0;
    let result=[];
    while(i<sortedNums.length-1){
        if((sortedNums[i]+1)!=sortedNums[i+1]){
            result.push({i: i+1, n:sortedNums[i+1]})
        }
        i++;
    }
    return result;
}

console.log(allNonConsecutive(nums1))
/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums4 = [2, 5, 3, 6, 7, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
// function findConsqSums(nums, targetSum) {
//     let i=0;
//     let result=[];
//     while(i<nums.length){
//         let j=i;
//         let sum=0;
//         while(Math.abs(sum)<=Math.abs(targetSum)){
//             if(sum==targetSum){
//                 console.log(nums.slice(i,j));
//                 result.push(nums.slice(i,j));
//             }
//             sum+=nums[j];
//             j++;
//         }
//         i++;
//     }
//     return result;
// }

function findConsqSums(nums, targetSum) {
    let i=0;
    let j=0;
    let sum=0;
    let result=[];
    while(i<nums.length){
        if(sum==targetSum){
            result.push(nums.slice(i,j));
        }

        if(j<nums.length && Math.abs(sum)<=Math.abs(targetSum)){
            sum+=nums[j];
            j++;
        } else {
            i++;
            j=i;
            sum=0;
        }
    }
    return result;
}

console.log(findConsqSums(nums2, sum2))