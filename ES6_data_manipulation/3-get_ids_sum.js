function getStudentIdsSum(list) {
  const sumOfIds = list.reduce(function (accumulator, student) {
    return accumulator + student.id;
  }, 0);
  return sumOfIds;
}

export default getStudentIdsSum;
