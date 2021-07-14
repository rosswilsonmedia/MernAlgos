 /*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const test1NumsA = [1, 2];
const test1NumsB = [2, 1];
const expected8 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2NumsA = [1, 2, 3];
const test2NumsB = [4, 5, 6];
const expected9 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3NumsA = [4, 1, 2, 3, 4];
const test3NumsB = [1, 2, 3, 5, 5, 2];
const expected10 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array,
    but have duplicates, so only one copy of each is kept.
*/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {
    let a=0;
    let b=0;
    let is_dup={};
    let result=[];
    while(a<numsA.length){
        is_dup[numsA[a]]=false;
        a++;
    }
    while(b<numsB.length){
        if(is_dup[numsB[b]]==undefined){
            result.length+=1;
            result[result.length-1]=numsB[b];
        }
        is_dup[numsB[b]]=true;
        b++;
    }
    for(let key in is_dup){
        if(is_dup[key]==false){
            result.length+=1;
            result[result.length-1]=parseInt(key);
        }
    }
    return result;
}

console.log(symmetricDifferences(test3NumsA,test3NumsB))
/**
 * From an interview on 2/8/21. encodeStr algo was also given (aaabbcdd => a3b2cd2)
 *
 * The interviewee mentioned it was mostly a comprehension style question.
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

 const riverLevels1 = [15, 17, 30];
 const expected1 = 15; // 30 - 15 = 15
 
 const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
 const expected2 = 20; // 25 - 5 = 20
 
 const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
 const expected3 = 11; // 12 - 1 = 11
 
 const riverLevels4 = [1, 5];
 const expected4 = 4;
 
 const riverLevels5 = [5, 1];
 const expected5 = -1;
 
 const riverLevels6 = [9, 7, 7, 7];
 const expected6 = -1;
 
 const riverLevels7 = [42];
 const expected7 = -1;
 
 /**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
function measureWaterLevels(waterLevels) {
    let diff=-1;
    for(let i=0; i<waterLevels.length; i++){
        for(let j=i+1; j<waterLevels.length; j++){
            if((waterLevels[j]-waterLevels[i])>diff){
                diff=waterLevels[j]-waterLevels[i];
            }
        }
    }
    return diff;
}

console.log(measureWaterLevels(riverLevels3))