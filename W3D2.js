/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria2 = {
    lastName: "Smith",
  };
  const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];
  
  /**
   * Finds the objects that match the given search criteria.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} criteria
   * @param {Array<Object>} collection
   * @returns {Array<Object>} The found objects.
   */
function findObjects(criteria, collection) {
    let result=[];
    let i=0;
    while(i<collection.length){
        let isMatch=true;
        for(let key in criteria){
            if(collection[i][key]!=criteria[key]){
                isMatch=false;
                break;
            }
        }
        if(isMatch){
            result.push(collection[i]);
        }
        i++;
    }
    return result;
}

console.log(findObjects(searchCriteria2, items))
  /* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
  */
  
  const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id3 = 3;
  const updateData3 = { redBeltStatus: true, isLateToday: true };
  const expected3 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id4 = 1;
  const updateData4 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const expected4 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  /* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated
  */
  
  const id5 = 5;
  const updateData5 = {};
  const expected5 = null;
  
  /**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} id
   * @param {Object} updatedVals Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */
function findByIdAndUpdate(id, updatedVals, collection) {
    let i=0;
    while(i<collection.length){
        if(id == collection[i].id){
            let objUpdate = {...collection[i]};
            for(let key in updatedVals){
                if(key in objUpdate){
                    objUpdate[key] = updatedVals[key];
                }
            }
            return objUpdate;
        }
        i++;
    }
    return null;
}

console.log(findByIdAndUpdate(id3, updateData3, students));