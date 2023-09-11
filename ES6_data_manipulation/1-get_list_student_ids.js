const getListStudentIds = (list) => (
  Array.isArray(list) ? list.map((student) => student.id) : []
);

export default getListStudentIds;
