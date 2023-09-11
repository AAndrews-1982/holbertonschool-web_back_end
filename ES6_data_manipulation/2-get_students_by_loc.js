const getStudentsByLocation = (studentList, city) =>
  studentList.filter(student => student.location === city);

// Example usage:
const students = getListStudents(); // Assuming you have the previous getListStudents function defined
const city = "San Francisco";
const studentsInCity = getStudentsByLocation(students, city);
console.log(studentsInCity);
