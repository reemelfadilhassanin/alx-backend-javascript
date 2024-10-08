// 1-get_list_student_ids.js
export default function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map
  return students.map((student) => student.id);
}
