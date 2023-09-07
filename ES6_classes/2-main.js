// 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name); // Output: "ES6"
c1.name = "Python 101";
console.log(c1); // Output: HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }

try {
    c1.name = 12; // This will throw an error
} 
catch(err) {
    console.log(err); // Output: "Name must be a string"
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]); // This will throw an error
}
catch(err) {
    console.log(err); // Output: "Length must be a number"
}
