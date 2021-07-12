const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

// function ordered(arr1, arr2){
//     let newArr = []
//     for(let i = 0; i<arr1.length; i++){
//         console.log(i)
//         for(let j = 0; j < arr2.length; j++){
//             console.log(j)
//             if(arr1[i]==arr2[j] && newArr[newArr.length-1]!=arr2[j]){
//                 newArr.push(arr1[i])
//             }
//         }
//     }
//     return newArr
// }

// console.log(ordered(numsA1, numsB1))

function orderedIntersection(sortedA, sortedB) {

    let resultsArr = []
    while(sortedA.length>0 && sortedB.length>0){
        if(sortedA[sortedA.length-1]==sortedB[sortedB.length-1]){
            if(resultsArr[0]!=sortedA[sortedA.length-1]){
                resultsArr=[sortedA[sortedA.length-1], ...resultsArr];
            }
            sortedA.length-=1;
            sortedB.length-=1;
        } else if (sortedA[sortedA.length-1]>sortedB[sortedB.length-1]){
            sortedA.length-=1;
        } else {
            sortedB.length-=1;
        }
    }
    return resultsArr;
    // return a new array filled with only the intersecting values, no duplicates

    // CHALLENGE: COMPLETE ALGO WITHOUT THE HELP OF NEW DATA STRUCTURES
    // CHALLENGE: COMPLETE ALGO USING ONLY ONE LOOP AND NO BUILT-IN FUNCTIONS (PUSH ALLOWED)
}

console.log(orderedIntersection(numsA1, numsB1));

// module.exports = { orderedIntersection };
