/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    let sStr = '';
    let tStr = '';
    let i=0;
    while(i<S.length || i<T.length){
        if (S[i]){
            if (S[i] != '#'){
                sStr += S[i];
            } else if (sStr!=''){
                sStr=sStr.slice(0, sStr.length-1);
            }
        }
        if (T[i]){
            if (T[i] != '#'){
                tStr += T[i];
            } else if (tStr!=''){
                tStr=tStr.slice(0, tStr.length-1);
            }
        }
        i++;
    }
    console.log(sStr)
    console.log(tStr)
    return tStr===sStr;
}

console.log(backspaceStringCompare(S1, T1))
/* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
  {
    name: "Baby Yoda",
    category: "cute",
  },
  {
    name: "Cricket Protein",
    category: "food",
  },
  {
    name: "Shibe",
    category: "Cute",
  },
  {
    name: "Ancient India",
    category: "Cradle of Civilization",
  },
  {
    name: "Wasp Crackers",
    category: "Food",
  },
  {
    name: "The Fertile Crescent",
    category: "Cradle of Civilization",
  },
];

const expected = {
  cute: [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Shibe",
      category: "Cute",
    },
  ],
  food: [
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
  ],
  "cradle of civilization": [
    {
      name: "Ancient India",
      category: "Cradle of Civilization",
    },
    {
      name: "The Fertile Crescent",
      category: "Cradle of Civilization",
    },
  ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
    let results = {};
    for(let i in items){
        let lowerCat = items[i].category.toLowerCase();
        if(!(lowerCat in results)){
            results[lowerCat] = [items[i]];
        } else {
            results[lowerCat].push(items[i]);
        }
    }
    return results;
}

console.log(groupObjects(objects));