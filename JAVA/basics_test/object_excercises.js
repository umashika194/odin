// https://javascript.info/object
// Hello, object

let user = {};
user["name"] = "john";
user["surname"] = "smith";
user.name = "pete";
delete user.name;

// Check for emptiness

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// oder 

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Sum object properties