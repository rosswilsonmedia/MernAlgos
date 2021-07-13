/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */
function diagonalDifference(sqrMatrix) {
    let lr=0;
    let rl=0;
    for(let i=0; i<sqrMatrix.length; i++){
        lr+=sqrMatrix[i][i];
        rl+=sqrMatrix[i][sqrMatrix.length-1-i];
    }
    return Math.abs(lr-rl);
}

console.log(diagonalDifference(squareMatrix1));

  /* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7, 8];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    let result=[];
    let a=0;
    let b=0;
    while(a<sortedA.length && b<sortedB.length){
        if(sortedA[a]==sortedB[b]){
            result.length+=1;
            result[result.length-1]=sortedA[a];
            a++;
            b++;
        } else if (sortedA[a]<sortedB[b]){
            result.length+=1;
            result[result.length-1]=sortedA[a];
            a++;
        } else {
            result.length+=1;
            result[result.length-1]=sortedB[b];
            b++;
        }
    }
    while(a<sortedA.length){
        result.length+=1;
        result[result.length-1]=sortedA[a];
        a++;
    }
    while(b<sortedB.length){
        result.length+=1;
        result[result.length-1]=sortedB[b];
        b++;
    }
    return result;
}

console.log(orderedMultisetUnion(numsA, numsB));