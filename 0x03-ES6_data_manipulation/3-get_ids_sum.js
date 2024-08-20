export default function getStudentIdsSum(students) {
  return students.reduce((acc, val) => acc + val.id, 0);
}
