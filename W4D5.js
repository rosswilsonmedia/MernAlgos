/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration6 = 300;
const songDurations6 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected6 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration7 = 300;
const songDurations7 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected7 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration8 = 300;
const songDurations8 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected8 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime(busDuration, songDurations) {
    let results = [-1,-1];
    let songRuntime = busDuration-30;
    let longestSong = 0;
    for(let i=0; i<songDurations.length; i++){
        for(let j=i+1; j<songDurations.length; j++){
            let tempMax = Math.max(songDurations[j], songDurations[i]);
            if(songDurations[i]+songDurations[j] == songRuntime && tempMax>longestSong){
                results = [i,j];
                longestSong=tempMax;
            }
        }
    }
    return results;
}

console.log(amazonMusicRuntime(busDuration7, songDurations7))


/* 
  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case
  .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: not strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    let s1Lower = s1.toLowerCase();
    let s2Lower = s2.toLowerCase();
    let s1Obj = {};
    for(let index in s1Lower){
        if(s1Lower[index] in s1Obj){
            s1Obj[s1Lower[index]] += 1;
        } else {
            s1Obj[s1Lower[index]] = 1;
        }
    }
    let s2Obj = {};
    for(let index in s2Lower){
        if(s2Lower[index] in s2Obj){
            s2Obj[s2Lower[index]] += 1;
        } else {
            s2Obj[s2Lower[index]] = 1;
        }
    }
    console.log(s1Obj)
    console.log(s2Obj)
    for(let key in s1Obj){
        if(!(key in s2Obj) || s2Obj[key]<s1Obj[key]){
            return false;
        }
    }
    return true;
}

console.log(canBuildS1FromS2(strA1, strB1))