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
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Schmete: 1000
}

let sum = 0;
function sumobj(obj) {
  for (let prop in obj) {
    key = prop;
    sum += obj[prop];
  }
return sum;
}

sumobj(salaries);
console.log(sum);

// Multiply numeric property values by 2
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyobj(obj) {
  for (let prop in obj) {
    console.log(typeof obj[prop]);
    if (typeof obj[prop] === "number") {
      obj[prop] = (obj[prop] * 2);
    }
  }
}

multiplyobj(menu);
console.log(menu);
