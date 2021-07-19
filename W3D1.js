/*
Recreate Object.entries method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

  // This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

/**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */
function entries(obj) {
    let result = [];
    for(let key in obj){
        if(!(key in obj.__proto__)){
            result.push([key, obj[key]]);
        }
    }
    return result;
}

console.log(entries(obj2))
/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
*/

const table = "users";
const insertData3 = { first_name: "John", last_name: "Doe" };
const expected3 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData4 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected4 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
    let keys = '(';
    let values = '(';
    for(let key in columnValuePairs){
        if(values[values.length-1] != '('
        && keys[keys.length-1] != '('){
            values+=', ';
            keys+=', ';
        }
        keys+=key;
        if(typeof(columnValuePairs[key]) == "string"){
            values+= '"' + columnValuePairs[key] + '"';
        } else {
            values+=columnValuePairs[key];
        }
    }
    values += ")";
    keys += ")";
    let query = 'INSERT INTO ' + tableName + " " + keys
    + ' VALUES ' + values + ';';
    return query;
}
console.log(insert(table, insertData4))