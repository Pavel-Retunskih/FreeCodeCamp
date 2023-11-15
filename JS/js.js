// function sum(arr, n) {
//     // Only change code below this line
//    if(n<= 0){
//         return 0
//     }else{   
//         return sum(arr,n - 1) + arr[n - 1]    
//     }
        
// }
//     // Only change code above this line
//   console.log(sum([1], 0));


 // Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//   for(let i = 0; i < contacts.length; i++){
//     if(contacts[i].firstName === name){
//       return contacts[i][prop] || "No such property"
//     }     
//   }
//   return "No such contact"
//     // Only change code above this line
//   }
//  console.log(lookUpProfile("Kristian", "likes"));
function removeFirstTwo(list) {
  const[a,b,...arr] = list;
  return arr
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
//----------------------------------------------------
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line
console.log(half(stats));

//----------------------------------------------------
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
for (let i = 0; i < arr.length; i++) {
  failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
}

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
//----------------------------------------------------
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {name, age, gender};
  // Only change code above this line
};

console.log(createPerson("Iris", 65, "man"));
//-----------------------------------------------------
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
//-----------------------------------------------------
// Only change code below this line
class Vegetable {
  constructor(name, weight,cleanliness){
    this.name = name;
    this.weight = weight;
    this.cleanliness = cleanliness;

  }

}
// Only change code above this line

const carrot = new Vegetable('carrot', '2kg', true);
console.log(carrot); // Should display 'carrot'
//-----------------------------------------------------
// Only change code below this line
class Thermostat{
  constructor (temp){
    this._temp = temp
  }
  get temperature (){
    return 5/9 * (this._temp - 32)
  };
  set temperature(updateTemp){
    return this._temp = updateTemp * 9.0 / 5 + 32
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
