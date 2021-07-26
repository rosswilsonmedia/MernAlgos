/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
    let i=0;
    while(i<arr.length && !(cb(arr[i]))){
        i++;
    }
    if(i==arr.length){
        return []
    }
    return arr.slice(i,arr.length);
}

console.log(dropIt(nums3, callback3));

/*
    Given to me (Neil) in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?
*/

const str4 = "";
const expected4 = false;

const str5 = "a";
const expected5 = true;

const str6 = "ddaa";
const expected6 = true;
// Explanation: "daad" or "adda"

const str7 = "dda";
const expected7 = true;
// Explanation: "dad"

const str8 = "aaadd";
const expected8 = true;
// Explanation: "daaad"

const str9 = "abc";
const expected9 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    if(str===''){
        return false;
    }

    let strObj = {};
    for(let i=0; i<str.length; i++){
        if(str[i] in strObj){
            strObj[str[i]] += 1;
        } else {
            strObj[str[i]] = 1;
        }
    }

    let count=0;
    for(let key in strObj){
        if(strObj[key] % 2 === 1){
            count += 1;
        }
        if(count>1){
            return false;
        }
    }
    return true;
}

function canStringBecomePalindrome(str) {
    if(str===''){
        return false;
    }

    let strObj = {};
    for(let i=0; i<str.length; i++){
        if(str[i] in strObj){
            delete strObj[str[i]];
        } else {
            strObj[str[i]] = 1;
        }
    }

    return Object.keys(strObj).length <= 1 ? true : false;
}

console.log(canStringBecomePalindrome(str8))