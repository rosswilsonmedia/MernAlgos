/* 
  https://leetcode.com/problems/compare-version-numbers/
  Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
  Helpful methods:
    - .split(characterToSplitOn)
      - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
      - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 * - Time: O(?).
 * - Space: O(?).
 */
function compareVersionNumbers(v1, v2) {
    let v1Arr = v1.split('.');
    let v2Arr = v2.split('.');
    let status = 0;
    let i = 0;
    while(status==0 && (i<v1Arr.length || i<v2Arr.length)){
        let v1Val = parseInt(v1Arr[i]);
        let v2Val = parseInt(v2Arr[i]);
        if(v1Val<v2Val){
            status = -1;
        } else if (v1Val>v2Val){
            status = 1;
        }
        i++;
    }
    if(status==0){
        if(v1Arr.length<v2Arr.length){
            status = -1;
        } else if(v1Arr.length>v2Arr.length){
            status = 1;
        }
    }
    return status;
}

console.log(compareVersionNumbers(test6V1, test6V2))
/* 
https://leetcode.com/problems/container-with-most-water/
*/

const heights7 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected7 = 49;

const heights8 = [1, 1];
const expected8 = 1;

const heights9 = [4, 3, 2, 1, 4];
const expected9 = 16;

const heights10 = [1, 2, 1];
const expected10 = 2;

/**
 * Finds the max area of a container from the given heights where the length
 * is the distance between indexes.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    let maxHeight = 0;
    for(let i = 0; i<heights.length-1; i++){
        for(let j=i+1; j<heights.length; j++){
            let max = 0;
            if(heights[i]>heights[j]){
                max = heights[j]*(j-i);
            } else {
                max = heights[i]*(j-i);
            }

            if(max>maxHeight){
                maxHeight=max;
            }
        }
    }
    return maxHeight;
}

console.log(containerWithMostWater(heights10))