// 2-get_students_by_loc.js
export default function getStudentsByLocation(students, city) {
  // Use filter to get students in the specified city
  return students.filter((student) => student.location === city);
}
