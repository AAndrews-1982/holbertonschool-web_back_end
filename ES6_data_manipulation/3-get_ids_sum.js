function getStudentIdsSum(list) {
  // eslint-disable-next-line prefer-arrow-callback, func-names
  const sumOfIds = list.reduce(function (accumulator, student) {
    return accumulator + student.id;
  }, 0);
  return sumOfIds;
}

export default getStudentIdsSum;
