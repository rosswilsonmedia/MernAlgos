/* 
Given to alumni by Riot games in 2021.
*/

const str5 = "b70a164c32a20c10";
const expected5 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let hashObj={}
    let num='';
    let letter='';
    let i=0;
    while(i<s.length){
        if(/^[a-zA-Z]$/.test(s[i])){
            if(letter!=''){
                num=parseInt(num);
                if(letter in hashObj){
                    hashObj[letter]+=num;
                } else {
                    hashObj[letter]=num;
                }
                num=0;
            }
            letter=s[i]
        } else {
            num+=s[i];
        }
        i++;
    }
    let result='';
    while(Object.keys(hashObj).length!=0){
        let min='z';
        for(key in hashObj){
            if(key<min){
                min=key;
            }
        }
        result+=min+hashObj[min];
        delete hashObj[min];
    }
    return result;
}

console.log(rehash(str5))
/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    let maxSub=1;
    let i=0;
    while(i<str.length){
        let unique='';
        let j=i;
        while(j<str.length && !(unique.includes(str[j]))){
            unique+=str[j];
            j++;
        }
        if(j-i>maxSub){
            maxSub=j-i;
        }
        i++;
    }
    return maxSub;
}


console.log(lengthOfLongestSubString(str1))