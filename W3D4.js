/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
  };
  
  const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
  };
  const expected1 = 1;
  // because only 1 live squid is available and that is the limiting ingredient
  
  // same as available1, except live squid has 10.
  const available2 = { ...available1, ["live squid"]: 10 };
  const expected2 = 10;
  
  // same as available1 except live squid key is deleted.
  const available3 = { ...available1 };
  delete available3["live squid"];
  const expected3 = 0; // live squid key doesn't exist in available ingredients
  
  /**
   * Determines how many servings can be made of the given recipe.
   * - Time: O(?).
   * - Space: O(?).
   * @typedef {string} IngredientName
   * @typedef {number} Quantity
   * @typedef {Object<IngredientName, Quantity>} Ingredients
   * @param {Ingredients} recipe
   * @param {Ingredients} available
   * @returns {number} Max servings of the recipe that can be made.
   */
function getMaxServings(recipe, available) {
    let min=null;
    for(let key in recipe){
        if(key in available && (min == null ||
        Math.floor(available[key]/recipe[key]) < min)){
            min=Math.floor(available[key]/recipe[key]);
        } else if (!(key in available)) {
            return 0;
        }
    }
    return min;
}

console.log(getMaxServings(recipe1, available3))
/* 
    Given an array of person objects with the following keys:
      firstName[string]
      lastName[string]
      friends[arr of friend objects]
      isSocialDistancing[bool]
      Friend object keys:
        firstName[string]
        lastName[string]
        isSocialDistancing[bool]
        hasCovid[bool]
      return a new array of the names of people (not friends) who are at high risk of infection
      A person is at high risk of catching the virus if they meet all the below criteria:
      1. not practicing social distancing
      2. have a friend who is not practicing social distancing whom hasCovid
      Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
  */
  
  const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
  };
  
  const people = [
    {
      firstName: "Person",
      lastName: "One",
      isSocialDistancing: false,
      friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
  ];
  
  const expected = ["Person One", "Person Three"];
  
  /**
   * Finds the people who are at risk of contracting Covid.
   * - Time O(?).
   * - Space O(?).
   * @param {Array<Person>} persons
   * @returns {Array<string>} An array of Person full names for those people who
   *    are at risk. A Person is at risk if:
   *    1. not practicing social distancing.
   *    2. have a friend who is not practicing social distancing whom hasCovid.
   */
function coronaVirusAtRisk(persons) {
    let results = [];
    for(let i=0; i<persons.length; i++){
        if(persons[i].isSocialDistancing===false){
            for(let j=0; j<persons[i].friends.length; j++){
                if(persons[i].friends[j].hasCovid &&
                persons[i].friends[j].isSocialDistancing===false){
                    results.push(persons[i].firstName + " " + persons[i].lastName);
                    break;
                }
            }
        }
    }
    return results;
}

console.log(coronaVirusAtRisk(people));