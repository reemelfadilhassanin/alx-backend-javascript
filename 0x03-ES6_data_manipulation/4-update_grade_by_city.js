// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the corresponding grade in newGrades
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // Return updated grade or 'N/A'
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
