/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
*/

const people = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];
  
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];
  
  
  /**
   * Filters the given items based on the search criteria using a startsWith
   * search method.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Object>} items The items to be filtered.
   * @param {string} searchBy The key to search by.
   * @param {string} searchFor The value of the given key to search for.
   * @returns {Array<Objects>} The matched items.
   */
function filterByKey(items, searchFor, searchBy) {
    let result = [];
    for(let i=0; i<items.length; i++){
        let isMatch = true;
        for(let j=0; j<searchFor.length; j++){
            if(searchFor[j] != items[i][searchBy][j]){
                isMatch=false;
                break;
            }
        }
        if(isMatch){
            result.push(items[i]);
        }
    }
    return result;
}

console.log(filterByKey(people, searchFor3, searchBy3))
  /* 
    Given an array of objects representing people, and a string representing a bad habit
    return a "santasNaughtyList" containing the first and last names of all the people who
    have the matching bad habit so that santa knows how much coal he needs.
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
  */
  
  const students = [
    {
      firstName: "FN1",
      lastName: "LN1",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "FN2",
      lastName: "LN2",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "FN3",
      lastName: "LN3",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "FN4",
      lastName: "LN4",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];
  
  const badHabit4 = "doesn't wash dishes";
  const expected4 = ["FN1 LN1", "FN3 LN3"];
  
  const badHabit5 = "shows up late";
  const expected5 = ["FN2 LN2", "FN3 LN3"];
  
  const badHabit6 = "vapes too much";
  const expected6 = [];
  
  /**
   * Finds a list of people whose habits contain the given bad habit.
   * - Time O(?).
   * - Space O(?).
   * @typedef {Object} Person
   * @property {string} firstName
   * @property {string} lastName
   * @property {Array<string>} habits
   * @param {Array<Person>} persons
   * @param {string} badHabit
   * @returns {Array<Person>} The people that have the given bad habit.
   */
function santasNaughtyList(persons, badHabit) {
    let result = [];
    for(let i=0; i<persons.length; i++){
        for(let j=0; j<persons[i].habits.length; j++){
            if(badHabit === persons[i].habits[j]){
                result.push(persons[i].firstName + " " + persons[i].lastName)
                break;
            }
        }
    }
    return result;
}

console.log(santasNaughtyList(students, badHabit6))